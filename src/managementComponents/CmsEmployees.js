import {CmsNavbar} from './CmsNavbar';
import {useEffect, useState} from 'react';
import {employeesGetRequest} from '../requests/employeesGetRequest';
import {employeesPostRequest} from '../requests/employeesPostRequest';
import {employeesRolesGetRequest} from '../requests/employeesRolesGetRequest';
import {employeesDeleteRequest} from '../requests/employeesDeleteRequest';

export const CmsEmployees = () => {

    const [employees, setEmployees] = useState([]);
    const [employeesRoles, setEmployeesRoles] = useState([]);
    const [employeeFirstName, setEmployeeFirstName] = useState("");
    const [employeeLastName, setEmployeeLastName] = useState("");
    const [employeePhoneNumber, setEmployeePhoneNumber] = useState("");
    const [employeeRole, setEmployeeRole] = useState("");
    const [employeeLogin, setEmployeeLogin] = useState("");
    const [employeePassword, setEmployeePassword] = useState("");

    useEffect(() => {
        employeesRolesGet();
        employeesGet();
    },[])

    const employeesGet = async () =>{
        const response = await employeesGetRequest();
        setEmployees(response);
    }
    
    const employeesRolesGet = async () =>{
        const response = await employeesRolesGetRequest();
        if(response !== undefined){
            setEmployeeRole(response[0]);
            setEmployeesRoles(response);
        }
    }

    const employeesPost = async () =>{
        const response = await employeesPostRequest({
            "firstName":employeeFirstName,
            "surname":employeeLastName,
            "phoneNumber":employeePhoneNumber,
            "login":employeeLogin,
            "password":employeePassword,
            "role":employeeRole
        });
        employeesGet();
    }

    const employeesDelete = async (e) =>{
        const response = await employeesDeleteRequest(e.target.dataset.id);
        employeesGet();
    }

    return(
        <div className="cmsEmployeesContainer">
            <CmsNavbar/>
            <div className="cmsEmployeesContent">
                <div className="employeeRow">
                    <div><h1>Id</h1></div>
                    <div><h1>First name</h1></div>
                    <div><h1>Last name</h1></div>
                    <div><h1>Phone number</h1></div>
                    <div><h1>Role</h1></div>
                    <div><h1>Login</h1></div>
                    <div><h1>Password</h1></div>
                    <div><h1>Modify</h1></div>
                </div>

                <div className="employeeRow">
                    <div><p>-</p></div>
                    <div onChange={(e) => setEmployeeFirstName(e.target.value)} className="addInput"><input type="text" placeholder="Marcin" autocomplete="off" name="category" required></input></div>
                    <div onChange={(e) => setEmployeeLastName(e.target.value)} className="addInput"><input type="text" placeholder="Dyl" autocomplete="off" name="category" required></input></div>
                    <div onChange={(e) => setEmployeePhoneNumber(e.target.value)} className="addInput"><input type="text" placeholder="123-245-638" autocomplete="off" name="category"></input></div>
                    <div className="addInput">
                        <select onChange={(e) => setEmployeeRole(employeesRoles.filter(value => value.name === e.target.value ? true : false)[0])}>
                            {employeesRoles !== undefined ?
                                employeesRoles.map(value => {
                                    return <option>{value.name}</option>
                                })
                            : null
                            }
                        </select>
                    </div>
                    <div onChange={(e) => setEmployeeLogin(e.target.value)} className="addInput"><input type="text" placeholder="Login" autocomplete="off" name="category" required></input></div>
                    <div onChange={(e) => setEmployeePassword(e.target.value)} className="addInput"><input type="password" placeholder="password" autocomplete="off" name="category" required></input></div>
                    <div><button onClick={employeesPost}>Add</button></div>
                </div>

                {
                employees !== undefined ?
                    employees.map(value => {
                    return(
                        <div className="employeeRow">
                            <div><p>{value.id}</p></div>
                            <div><p>{value.firstName}</p></div>
                            <div><p>{value.surname}</p></div>
                            <div><p>{value.phoneNumber}</p></div>
                            <div><p>{value.role.name}</p></div>
                            <div><p>{value.login}</p></div>
                            <div><p>-</p></div>
                            <div><button>Modify</button><button data-id={value.id} onClick={employeesDelete}>Delete</button></div>
                        </div>
                    ) 
                    })
                : null
                }
            </div>
        </div>
    )
}