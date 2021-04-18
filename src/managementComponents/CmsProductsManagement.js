import {CmsNavbar} from './CmsNavbar';
import {groupGetRequest} from '../requests/groupGetRequest';
import {productPostRequest} from '../requests/productPostRequest';
import {productGetRequest} from '../requests/productGetRequest';
import {productDeleteRequest} from '../requests/productDeleteRequest';
import {useState, useEffect} from 'react';

export const CmsProductsManagement = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchBar, setSearchBar] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productGroup, setProductGroup] = useState("");
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getGroups();
    },[]);

    useEffect(() =>{
        filterProducts();
    },[products])

    useEffect(() => {
        filterProducts();
    },[searchBar]);

    const getGroups = async () => {
        const response = await groupGetRequest();
        if(response !== undefined){
            setGroups(response);
            setProductGroup(response[0]);
        }
    }

    const filterProducts = () =>{
        if(products !== undefined){
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
    }

    const getProducts = async () =>{
        const response = await productGetRequest();
        setProducts(response);
    }

    const addProduct = async () => {
        const request = await productPostRequest({
            "productName":productName,
            "price":productPrice,
            "description":productDescription,
            "group":productGroup
        });
        getProducts();
    }

    const deleteProduct = async (e) =>{
        const request = await productDeleteRequest(e.target.dataset.id);
        getProducts();
    }

    return(
        <div className="productManagementMainContainer">
            <CmsNavbar/>
            <div className="productManagementContent">
                <div className="productRow"></div>

                <div className="productRow">
                    <div><h1>id</h1></div>
                    <div><h1>name</h1></div>
                    <div><h1>price</h1></div>
                    <div><h1>contains</h1></div>
                    <div><h1>promotion</h1></div>
                    <div><h1>group</h1></div>
                    <div><h1>Edit</h1></div>
                </div>

                <div className="productRow">
                    <div><p>-</p></div>
                    <div className="addInput"><input type="text" onChange={(e) => setProductName(e.target.value)}
                     placeholder="philadelphia" autocomplete="off" name="category" required></input></div>
                    <div className="addInput"><input type="text" onChange={(e) => setProductPrice(e.target.value)}
                     placeholder="6.00" autocomplete="off" name="category" required></input></div>
                    <div className="addInput"><input type="text" onChange={(e) => setProductDescription(e.target.value)}
                     placeholder="rice, nori, philadelphia cream" autocomplete="off" name="category" required></input></div>
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
                                <div><p>{value.description}</p></div>
                                <div><p>4.50$</p></div>
                                <div><p>{value.group.name}</p></div>
                                <div className="productButtons"><button>modify</button><button data-id={value.id} onClick={deleteProduct}>delete</button></div>
                            </div>
                        )
                    })
                : null
                }
                
            </div>
        </div>
    )
}