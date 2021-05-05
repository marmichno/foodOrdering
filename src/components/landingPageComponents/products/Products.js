import {useState, useEffect} from 'react';
import {productGetByIdRequest} from '../../../requests/productGetByIdRequest';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../../../actions/index'
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

export const Products = () =>{

    const dispatch = useDispatch();
    const productGroupId = useSelector(state => state.orderGroupIdReducer);
    const [products, setProducts] = useState([]);


    useEffect(() => {
      getProducts(productGroupId);
    },[])

    useEffect(() =>{
      getProducts();
    },[productGroupId]);

    const getProducts = async () => {
      if(productGroupId !== null){
        const response = await productGetByIdRequest(productGroupId);
        if(response !== undefined){
          setProducts(response);
        }
      }
    }

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
              {products !== undefined ?
              products.map((value, id) => {
                return (
                  <div key={`foodWrapper${id}`} className="foodWrapper">
                    <div key={id} className="foodContainer">
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
                        <button data-testid={`addToCartBtn${id}`} data-price={value.price} data-name={value.productName} onClick={addToCart}>Order</button>
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

export default Products;