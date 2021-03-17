import Slider from "react-slick";
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../actions/index'

export const Carousel = ({choosenFood}) =>{

    const sushiPrice = 6;
    const ramenPrice = 8
    const prawnsPrice = 5;
    const setsPrice = 15;

    const dispatch = useDispatch();

    const [products, setProducts] = useState(['product', 'product', 'product', 'product', 'product', 'product','product', 'product', 'product', 'product', 'product',])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4
      };

      const addToCart = (e) => {
        const price = e.target.dataset.price;
        const name = e.target.dataset.name;

        const productData = {
            price,
            name,
            quantity: 1
        }

        dispatch(addProduct(productData));
    }

      if(choosenFood === 'Sushi rolls'){
        return (
            <Slider {...settings}>
              {products.map(value => {
                return (<div className="sliderElement">
                  <div>
                    <div className="productImage">
                    </div>
                    <div className="productDetails">
                      <div className="productHeader">
                        <h2>Philadelphia roll</h2>
                      </div>
                      <hr></hr>
                      <div className="productIngredients">
                        <p>Contains: rice, nori leaf, fresh salmon, philadeplhia cream, cucumber, avocado, sesam</p>
                        <p><b>~ 6.00$</b></p>
                      </div>
                      <button data-price={sushiPrice} data-name={'Sushi rolls'} onClick={addToCart}>Order</button>
                    </div>
                  </div>
                </div>
                )
              })}
            </Slider>
        );
    }else if(choosenFood === 'Ramen'){
      return (
        <Slider {...settings}>
          {products.map(value => {
            return (<div className="sliderElement">
              <div>
                <div className="productImage">
                </div>
                <div className="productDetails">
                  <div className="productHeader">
                    <h2>Ramen</h2>
                  </div>
                  <hr></hr>
                  <div className="productIngredients">
                    <p>Contains: rice, nori leaf, fresh salmon, philadeplhia cream, cucumber, avocado, sesam</p>
                    <p><b>~ 6.00$</b></p>
                  </div>
                  <button data-price={ramenPrice} data-name='Ramen' onClick={addToCart}>Order</button>
                </div>
              </div>
            </div>
            )
          })}
        </Slider>
      );
    }else if(choosenFood === 'Prawns'){
      return (
        <Slider {...settings}>
          {products.map(value => {
            return (<div className="sliderElement">
              <div>
                <div className="productImage">
                </div>
                <div className="productDetails">
                  <div className="productHeader">
                    <h2>Prawns</h2>
                  </div>
                  <hr></hr>
                  <div className="productIngredients">
                    <p>Contains: rice, nori leaf, fresh salmon, philadeplhia cream, cucumber, avocado, sesam</p>
                    <p><b>~ 6.00$</b></p>
                  </div>
                  <button data-price={prawnsPrice} data-name='Prawns' onClick={addToCart}>Order</button>
                </div>
              </div>
            </div>
            )
          })}
        </Slider>
      );
    }else if(choosenFood === 'Sets'){
      return (
        <Slider {...settings}>
          {products.map(value => {
            return (<div className="sliderElement">
              <div>
                <div className="productImage">
                </div>
                <div className="productDetails">
                  <div className="productHeader">
                    <h2>Sets</h2>
                  </div>
                  <hr></hr>
                  <div className="productIngredients">
                    <p>Contains: rice, nori leaf, fresh salmon, philadeplhia cream, cucumber, avocado, sesam</p>
                    <p><b>~ 6.00$</b></p>
                  </div>
                  <button data-price={setsPrice} data-name='Sets' onClick={addToCart}>Order</button>
                </div>
              </div>
            </div>
            )
          })}
        </Slider>
      );
    }
}