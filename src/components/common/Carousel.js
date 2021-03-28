import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../actions/index'
import {motion} from 'framer-motion';

const containerVariants = {
  hidden: {
      x: 2000
  },
  visible: {
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.5,
        mass: 1,
        damping: 12
      }
  },
  exit: {
      x:'100vw',
      transition: {ease: 'easeInOut', duration:0.5}
  }
}

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
        <motion.div className="foodMainContainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
              {products.map(value => {
                return (
                  <div className="foodWrapper">
                    <div className="foodContainer">
                      <div className="productImage">
                      </div>
                      <div className="productDetails">
                        <div className="productHeader">
                          <h1>Philadelphia roll</h1>
                        </div>
                        <hr></hr>
                        <div className="productIngredients">
                          <p>Contains: rice, nori leaf, fresh salmon, philadeplhia cream, cucumber, avocado, sesam</p>
                          <h1>~ 6.00$</h1>
                        </div>
                        <button data-price={sushiPrice} data-name={'Sushi rolls'} onClick={addToCart}>Order</button>
                      </div>
                    </div>
                  </div>
                )
              })}
        </motion.div>
        )
}