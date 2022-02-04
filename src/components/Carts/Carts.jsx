import React from "react";
import Slider from "react-slick";

import right from "../../img/icon/right.svg"
import left from "../../img/icon/left.svg"

import "./Carts.sass"


const Carts = ({ countries }) => {

    const settings = {
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        slidesPerRow: 6,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesPerRow: 5,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 4,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesPerRow: 3,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesPerRow: 2,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                {countries.map(item => (
                    <div className="slider__item">
                        <div className="slider__pos">
                            <img className="slider__img" src={item.imgpk} alt="" />
                            <div className="slider__overtext">
                                <span className="over__city">{item.city}</span>
                                <span className="over__country">{item.country}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carts