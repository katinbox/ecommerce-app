const mongoose = require("mongoose");
const slugify = require("slugify");
const paginate = require("mongoose-paginate-v2");

/**
 * @swagger
 *  components:
 *       schemas:
 *           Product:
 *             type: object
 *             required:
 *               - category
 *               - title
 *               - sortDesc
 *               - image_url
 *             properties:
 *                   category:
 *                       type: string
 *                       example: 6361da66cac64578a1dcd8e7
 *                   title:
 *                       type: string
 *                       example: iPhone 14
 *                   sortDesc:
 *                       type: string
 *                       example: Ceramic Shield front Glass back and aluminum design
 *                   longDesc:
 *                       type: string
 *                       example: The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).
 *                   stock:
 *                       type: object
 *                       properties:
 *                           quantity:
 *                               type: int32
 *                               default: 0
 *                               example: 10
 *                           remain:
 *                               type: int32
 *                               readOnly: true
 *                               default: 0
 *                               example: 5
 *                   color:
 *                       type: array
 *                       items:
 *                           type: string
 *                       example: ['red', 'blue', 'black', 'rose']
 *                   slug:
 *                      type: string
 *                      readOnly: true
 *                      example: iPhone-14
 *                   price:
 *                      type: int32
 *                      default: 0
 *                      example: 400000
 *                   sale_price:
 *                      type: int32
 *                      default: 0
 *                   total_selling:
 *                      type: int32
 *                      default: 0
 *                      example: 5
 *                      readOnly: true
 *                   image_url:
 *                       type: string
 *                       example: https://elektragt.vtexassets.com/arquivos/ids/186678/iPhone_14_Plus_Purple_Pure_Back_iPhone_14_Plus_Purple_Pure_Front_2-up_Screen__USEN.jpg?v=638013456772430000
 *                   galerry_image:
 *                       type: array
 *                       items:
 *                           type: string
 *                   isDeleted:
 *                       type: boolean
 *                       default: false
 *                       readOnly: true
 *
 */

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    title: {
        type: String,
        require: true,
    },
    sortDesc: {
        type: String,
        require: true,
    },
    longDesc: {
        type: String,
    },
    stock: {
        quantity: {
            type: Number,
            default: 0,
        },
        remain: {
            type: Number,
            default: 0,
        },
    },
    color: [
        {
            type: String,
            require: true,
        },
    ],
    slug: {
        type: String,
        default: function () {
            return slugify(this.title);
        },
    },
    price: {
        type: Number,
        default: 0,
    },
    sale_price: {
        type: Number,
    },
    total_selling: {
        type: Number,
        default: 0,
    },
    image_url: {
        type: String,
        require: true,
    },
    gallery_image: [{ type: String }],
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

productSchema.plugin(paginate);

module.exports = mongoose.model("product", productSchema);
