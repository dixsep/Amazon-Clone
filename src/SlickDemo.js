import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slickdemo.css'; 
export class SlickDemo extends Component{
    render() {
        var settings ={
                dots:true,
                infinite:true,
                speed:500,
                centerMode:true,
                slidesToShow:1,
                slidesToScroll:1
        };
        return(
            <div>
                <Slider {...settings}>
                    <div className="home__picture">
                        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                    </div>
                    <div className="home__picture">
                        <img className="home__image" src="https://m.media-amazon.com/images/I/61nCSYw01OL._SX3000_.jpg"/>
                    </div>
                    <div className ="home__picture">
                        <img src="https://m.media-amazon.com/images/I/51FpzpLJ6gL._SX3000_.jpg" className="home__image"/>
                    </div>
                    <div className="home__picture">
                        <img className="home__image" src="https://m.media-amazon.com/images/I/71-U9on4YAL._SX3000_.jpg"/>
                    </div>
                    <div className="home__picture">
                        <img className="home__image" src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SlickDemo