import Slider from "react-slick";

export const Carousel = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };

      return (
          <Slider {...settings}>
            <div className="sliderElement">
              <h3>slide</h3>
            </div>
            <div className="sliderElement">
              <h3>2</h3>
            </div>
            <div className="sliderElement">
              <h3>3</h3>
            </div>
            <div className="sliderElement">
              <h3>4</h3>
            </div>
            <div className="sliderElement">
              <h3>5</h3>
            </div>
            <div className="sliderElement">
              <h3>dyl</h3>
            </div>
            <div className="sliderElement">
              <h3>2</h3>
            </div>
            <div className="sliderElement">
              <h3>3</h3>
            </div>
            <div className="sliderElement">
              <h3>4</h3>
            </div>
            <div className="sliderElement">
              <h3>5</h3>
            </div>
          </Slider>
      );
}