import {CmsNavbar} from './CmsNavbar';
import {useState} from 'react';

export const CmsProductsManagement = () => {

    const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const [searchBar, setSearchBar] = useState("");

    const searchBarText = (e) =>{
        setSearchBar(e.target.value);
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
                    <div className="addInput"><input type="text" placeholder="product name" autocomplete="off" name="category" required></input></div>
                    <div className="addInput"><input type="text" placeholder="product price" autocomplete="off" name="category" required></input></div>
                    <div><p>-</p></div>
                    <div className="addInput"><select><option>Sushi rolls</option><option>Ramen</option><option>Prawns</option><option>Others</option></select></div>
                    <div className="addButton"><button>save</button></div>
                </div>

                <div className="searchBar">
                    <input onChange="" type="text" placeholder="Search" autocomplete="off" name="category" required></input><h1>Search</h1>
                </div>

                {products.map(value => {
                    return(
                        <div className="productRow">
                            <div><p>256</p></div>
                            <div><p>Philadelphia</p></div>
                            <div><p>6.00$</p></div>
                            <div><p>4.50$</p></div>
                            <div><p>Sushi rolls</p></div>
                            <div><button>modify</button><button>delete</button></div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}