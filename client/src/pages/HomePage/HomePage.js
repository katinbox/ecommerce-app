import React from "react";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import Slider from "../../components/Slider/Slider";
import ProductList from "../../components/ProductList/ProductList";

import "./HomePage.css";

const HomePage = () => {
    const contentSlides = [
        "/assets/banner/apple_banner.jpeg",
        "/assets/banner/oppo_banner.jpeg",
        "/assets/banner/samsung_zflip3_carousel_colorcombokv_ex_pc.jpeg",
    ];
    return (
        <PageContainer title="Mobile Shopping Store">
            <Slider contentSlides={contentSlides} />
            <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-indigo-500 pt-10">
                Popular products
            </h2>
            <ProductList />
            <div className="container mx-auto py-6 px-6 md:px-16 columns-1 md:columns-2">
                <div className="w-full">
                    <img src="/assets/cols-2-left-img.jpg"></img>
                </div>
                <div className="w-full h-full flex flex-col gap-4">
                    <h3 className="text-xl md:text-2xl">About Us</h3>
                    <h2 className="introduction-title text-uppercase text-3xl md:text-5xl text-indigo-600">
                        Mollyjogger Story
                    </h2>
                    <p>
                        Mollyjogger™ is an authentic American heritage brand,
                        based in the Ozark Mountains, celebrating the region’s
                        unique history of outdoor recreation, sporting and
                        folklore.
                    </p>
                </div>
            </div>
        </PageContainer>
    );
};

export default HomePage;
