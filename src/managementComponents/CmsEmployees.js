import {CmsNavbar} from './CmsNavbar';
import {useEffect, useState} from 'react';
import {employeesGetRequest} from '../requests/employeesGetRequest';
import {employeesPostRequest} from '../requests/employeesPostRequest';

export const CmsEmployees = () => {

    const [employeeFirstName, setEmployeeFirstName] = useState("");
    const [employeeLastName, setEmployeeLastName] = useState("");
    const [employeePhoneNumber, setEmployeePhoneNumber] = useState("");
    const [employeeRole, setEmployeeRole] = useState("");
    const [employeeLogin, setEmployeeLogin] = useState("");
    const [employeePasword, setEmployeePasword] = useState("");

    return(
        <div className="cmsEmployeesContainer">
            <CmsNavbar/>
            {/* <div className="cmsEmployeesContent">
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
                        <select>
                            <option>Sushi Chef</option><option>Chef</option><option>Waiter</option><option>Manager</option>
                        </select>
                    </div>
                    <div onChange={(e) => setEmployeeLogin(e.target.value)} className="addInput"><input type="text" placeholder="Login" autocomplete="off" name="category" required></input></div>
                    <div onChange={(e) => setEmployeePassword(e.target.value)} className="addInput"><input type="password" placeholder="password" autocomplete="off" name="category" required></input></div>
                    <div><button>Add</button></div>
                </div>

                {employees.map(value => {
                   return(
                    <div className="employeeRow">
                        <div><p>9</p></div>
                        <div><p>Marcin</p></div>
                        <div><p>Dyl</p></div>
                        <div><p>123-234-234</p></div>
                        <div><p>Chef</p></div>
                        <div><p>mdyl</p></div>
                        <div><p>-</p></div>
                        <div><button>Modify</button><button>Delete</button></div>
                    </div>
                   ) 
                })}
            </div> */}
        </div>
    )
}