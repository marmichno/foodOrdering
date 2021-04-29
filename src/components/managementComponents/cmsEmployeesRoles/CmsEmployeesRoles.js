import {CmsNavbar} from '../cmsNavbar/CmsNavbar';
import {useState, useEffect} from 'react';
import {employeesRolesGetRequest} from '../../../requests/employeesRolesGetRequest';
import {employeesRolesPostRequest} from '../../../requests/employeesRolesPostRequest';
import {employeesRolesDeleteRequest} from '../../../requests/employeesRolesDeleteRequest';

export const CmsEmployeesRoles = () =>{

    const [roles, setRoles] = useState([]);
    const [roleName, setRoleName] = useState("");

    useEffect(() =>{
        getRoles();
    },[]);

    const getRoles = async () =>{
        const response = await employeesRolesGetRequest();
        setRoles(response);
    }

    const addRole = async () => {
        const response = await employeesRolesPostRequest({
            "name":roleName
        });
        getRoles();
    }

    const deleteRole = async (e) => {
        const response = await employeesRolesDeleteRequest(e.target.dataset.id);
        getRoles();
    }

    return(
        <div className="employeesRolesMainContainer">
            <CmsNavbar/>
            <div className="employeesRolesContent">
                <div className="roleRow"></div>
                <div className="roleRow">
                    <div><h1>id</h1></div>
                    <div><h1>Role name</h1></div>
                    <div><h1>Employees in role</h1></div>
                    <div><h1>Edit</h1></div>
                </div>

                <div className="addRoleContainer">
                    <input onChange={(e) => setRoleName(e.target.value)} type="text" placeholder="group name" autocomplete="off" name="category" required></input>
                    <button onClick={addRole}>Add employee role</button>
                </div>

                {
                roles !== undefined ?
                    roles.map(value => {
                        return(
                            <div className="roleRow">
                                <div><p>{value.id}</p></div>
                                <div><p>{value.name}</p></div>
                                <div><p>123</p></div>
                                <div><button>modify</button><button data-id={value.id} onClick={deleteRole}>delete</button></div>
                            </div>
                        )
                    })
                : null
                }
            </div>
        </div>
    )
}