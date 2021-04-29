import {Link} from 'react-router-dom';

export const CmsLogin = () =>{
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

                <Link to={{
                        pathname:'/cmsLogin/cms'
                    }}>
                <button>Login</button>
                </Link>
            </div>
        </div>
    )
}