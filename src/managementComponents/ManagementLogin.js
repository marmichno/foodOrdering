export const ManagementLogin = () =>{
    return(
        <div className="managementLoginMainContainer">
            <div className="loginBox">
                <label for="category">
                    <span className="contentName"><p>Login</p></span>
                </label>
                <input type="text" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                <label for="category">
                    <span className="contentName"><p>Password</p></span>
                </label>
                <input type="password" autocomplete="off" name="category" className="firstSentenceInput" required></input>

                <button>Login</button>
            </div>
        </div>
    )
}