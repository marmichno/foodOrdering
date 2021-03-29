import {CmsNavbar} from './CmsNavbar';
import {useEffect, useState} from 'react';
import {groupPostRequest} from '../requests/groupPostRequest';
import {groupGetRequest} from '../requests/groupGetRequest';
import {groupDeleteRequest} from '../requests/groupDeleteRequest';

export const CmsProductGroups = () =>{

    const [groups, setGroups] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        getGroups();
    },[]);

    const getGroups = async () =>{
        const response = await groupGetRequest();
        setGroups(response);
    }

    const addGroup = async () =>{
        const response = await groupPostRequest(inputValue);
        getGroups();
    }

    const deleteGroup = async (e) =>{
        const response = await groupDeleteRequest(e.target.dataset.id);
        getGroups();
    }

    return(
        <div className="productGroupsMainContainer">
            <CmsNavbar/>
            <div className="productGroupsContent">
                <div className="groupRow">
                    <div><h1>id</h1></div>
                    <div><h1>Group name</h1></div>
                    <div><h1>Products in group</h1></div>
                    <div><h1>Edit</h1></div>
                </div>

                <div className="addGroupContainer">
                    <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="group name" autocomplete="off" name="category" required></input>
                    <button onClick={addGroup}>Add product group</button>
                </div>

                {
                groups !== undefined ?
                    groups.map(value => {
                        return(
                            <div className="groupRow">
                                <div>{value.id}</div>
                                <div><p>{value.name}</p></div>
                                <div><p>26</p></div>
                                <div><button>modify</button><button data-id={value.id} onClick={deleteGroup}>delete</button></div>
                            </div>
                        )
                    })
                : null
                }

            </div>
        </div>
    )
}