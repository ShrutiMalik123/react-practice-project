import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";

import image1 from "../../assets/img/B1.jpg";
import image2 from "../../assets/img/B1.jpg";
import image3 from "../../assets/img/B1.jpg";

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <GridContainer>
      <GridItem xs={0} sm={0} md={0}>
        <Card>
          <Carousel {...settings}>
            <div>
              <img src={image1} alt="First slide" className="slick-image" />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div>
            </div>
            <div>
              <img src={image2} alt="Second slide" className="slick-image" />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Somewhere Beyond, United States
                </h4>
              </div>
            </div>
            <div>
              <img src={image3} alt="Third slide" className="slick-image" />
              <div className="slick-caption">
                <h4>
                  <LocationOn className="slick-icons" />
                  Yellowstone National Park, United States
                </h4>
              </div>
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
