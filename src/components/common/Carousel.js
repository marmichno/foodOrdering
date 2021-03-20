import Slider from "react-slick";
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../actions/index'

export const Carousel = ({choosenFood}) =>{

    const sushiPrice = 6.00;
    const ramenPrice = 8.00
    const prawnsPrice = 5.00;
    const setsPrice = 15.00;

    const dispatch = useDispatch();

    const [products, setProducts] = useState(['product', 'product', 'product', 'product', 'product', 'product','product', 'product', 'product', 'product', 'product',]);

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

      return(
        <div className="foodMainContainer">
              {products.map(value => {
                return (
                  <div className="foodWrapper">
                    <div className="foodContainer">
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
        </div>
        )
}