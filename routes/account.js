const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const { hashPassword } = require("../utils/pwdUtil");
const { checkMissing } = require("../utils/validate");
const jwt = require("../utils/jwt");
const verifyTokenMdw = require("../middlewares/verify-token");

router.post("/", async (req, res) => {
    const { fullname, username, email, password } = req.body;

    if (checkMissing(fullname, email, password, username)) {
        return res.json({ msg: "Missing required keys" });
    }

    try {
        const emailExist = await UserController.isEmailExisted(email);
        if (emailExist) {
            return res.status(400).json({
                msg: "Email already exist, please try another one!",
            });
        }

        const usernameExist = await UserController.isUsernameExisted(username);
        if (usernameExist) {
            return res.status(400).json({
                msg: "Username already exist, please try another one!",
            });
        }

        const newUser = {
            fullname,
            username,
            email,
            password: await hashPassword(password),
        };

        const userCreated = await UserController.create(newUser);

        const token = jwt.sign({
            username,
            email,
            user_id: userCreated._id,
        });

        return res.status(201).json({
            msg: "User create successfully",
            token,
        });
    } catch (error) {
        throw Error(error.message);
    }
});

router.get("/:username", verifyTokenMdw, async (req, res) => {
    const { user_id } = req.user;
    const user = await UserController.findUser(user_id);

    return res.json({
        msg: "Get user successfully",
        data: user,
    });

    //get user
});
module.exports = router;
