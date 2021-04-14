import {useState, useEffect} from 'react';
import {productGetByIdRequest} from '../../requests/productGetByIdRequest';
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

export const Carousel = ({groupId}) =>{

    const sushiPrice = 6.00;
    const ramenPrice = 8.00
    const prawnsPrice = 5.00;
    const setsPrice = 15.00;

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    console.log(groupId);


    useEffect(() => {
      getProducts(groupId);
    },[])

    useEffect(() =>{
      getProducts();
    },[groupId]);

    const getProducts = async () => {
      if(groupId !== null){
        const response = await productGetByIdRequest(groupId);
        if(response !== undefined){
          setProducts(response);
        }
      }
    }

    useEffect(() =>{
      console.log(products);
    },[products])


      const addToCart = (e) => {
        const price = e.target.dataset.price;
        const name = e.target.dataset.name;

        const productData = {
            price,
            name,
            quantity: 1
        }

        console.log(productData);

        dispatch(addProduct(productData));
    }

      return(
        <motion.div className="foodMainContainer"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
              {products !== undefined ?
              products.map(value => {
                return (
                  <div className="foodWrapper">
                    <div className="foodContainer">
                      <div className="productImage">
                      </div>
                      <div className="productDetails">
                        <div className="productHeader">
                          <h1>{value.productName}</h1>
                          <hr></hr>
                        </div>
                        <div className="productIngredients">
                          <p>{value.description}</p>
                          <h1>~ {value.price}</h1>
                        </div>
                        <button data-price={value.price} data-name={value.productName} onClick={addToCart}>Order</button>
                      </div>
                    </div>
                  </div>
                )
              })
              : null
              }
        </motion.div>
        )
}