import {CmsNavbar} from './CmsNavbar';

export const CmsEmployees = () => {

    const employees = [1,2,3,4,5,6,7,8,9,10];

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
                    <div className="addInput"><input type="text" placeholder="First name" autocomplete="off" name="category" required></input></div>
                    <div className="addInput"><input type="text" placeholder="Last name" autocomplete="off" name="category" required></input></div>
                    <div className="addInput"><input type="text" placeholder="Phone number" autocomplete="off" name="category"></input></div>
                    <div className="addInput"><select><option>Sushi Chef</option><option>Chef</option><option>Waiter</option><option>Manager</option></select></div>
                    <div className="addInput"><input type="text" placeholder="Login" autocomplete="off" name="category" required></input></div>
                    <div className="addInput"><input type="password" placeholder="password" autocomplete="off" name="category" required></input></div>
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
            </div>
        </div>
    )
}