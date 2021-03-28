import {CmsNavbar} from './CmsNavbar';
import {groupGetRequest} from '../requests/groupGetRequest';
import {productPostRequest} from '../requests/productPostRequest';
import {productGetRequest} from '../requests/productGetRequest';
import {useState, useEffect} from 'react';

export const CmsProductsManagement = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchBar, setSearchBar] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productGroup, setProductGroup] = useState("");
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect( async () => {
        const response = await groupGetRequest();
        setGroups(response);
    },[]);

    useEffect(() =>{
        filterProducts();
    },[products])

    useEffect(() => {
        filterProducts();
    },[searchBar]);

    const filterProducts = () =>{
        setFilteredProducts(
            products.filter(value => {
                if(searchBar.length === 0){
                    return true;
                }else{
                    const regex = new RegExp(`^${searchBar}`, "i");
                    if((value.productName).match(regex)){
                        return true;
                    }else{
                        return false;
                    }
                }
            })
        )
    }

    const getProducts = async () =>{
        const response = await productGetRequest();
        setProducts(response);
    }

    const addProduct = async () => {
        const request = await productPostRequest({
            "productName":productName,
            "price":productPrice,
            "group":productGroup
        });
        getProducts();
    }

    return(
        <div className="productManagementMainContainer">
            <CmsNavbar/>
            <div className="productManagementContent">
                <div className="productRow">
                    <div><h1>id</h1></div>
                    <div><h1>name</h1></div>
                    <div><h1>primary price</h1></div>
                    <div><h1>price including promotions</h1></div>
                    <div><h1>group</h1></div>
                    <div><h1>Edit</h1></div>
                </div>

                <div className="productRow">
                    <div><p>-</p></div>
                    <div className="addInput"><input type="text" onChange={(e) => setProductName(e.target.value)} placeholder="product name" autocomplete="off" name="category" required></input></div>
                    <div className="addInput"><input type="text" onChange={(e) => setProductPrice(e.target.value)} placeholder="product price" autocomplete="off" name="category" required></input></div>
                    <div><p>-</p></div>
                    <div className="addInput">
                        <select onChange={(e) => setProductGroup(groups.filter(value => value.name === e.target.value ? true : false)[0])}>
                            {
                            groups !== undefined ?
                            groups.map(value => {
                                return <option data-groupId={value.id}>{value.name}</option>
                            })
                            : null
                            }
                        </select>
                    </div>
                    <div className="addButton" onClick={addProduct}><button>save</button></div>
                </div>

                <div className="searchBar">
                    <input onChange={(e) => setSearchBar(e.target.value)} type="text" placeholder="Search" autocomplete="off" name="category" required></input><h1>Search</h1>
                </div>

                {
                products !== undefined ?
                    filteredProducts.map(value => {
                        return(
                            <div className="productRow">
                                <div><p>{value.id}</p></div>
                                <div><p>{value.productName}</p></div>
                                <div><p>{parseInt(value.price).toFixed(2)}$</p></div>
                                <div><p>4.50$</p></div>
                                <div><p>{value.group.name}</p></div>
                                <div><button>modify</button><button>delete</button></div>
                            </div>
                        )
                    })
                : null
                }
                
            </div>
        </div>
    )
}