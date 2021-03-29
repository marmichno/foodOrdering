import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export const CmsNavbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const location = window.location.href;

    useEffect(() => {

        if(location.search("cmsLogin/cms") !== -1){
            setShowNavbar(true);
        }else{
            setShowNavbar(false);
        }

    }, [location])

    return(
        <>
            {showNavbar ?
            <div className="cmsNavbar">
                <Link to={{
                        pathname:'/cmsLogin/cms'
                }}>
                    <h1>Sales Data</h1>
                </Link>
                <div className="navContainer">
                    <Link to={{
                            pathname:'/cmsLogin/cms/productManagement'
                    }}>
                        <h1>Products</h1>
                    </Link>
                    <Link to={{
                            pathname:'/cmsLogin/cms/productGroups'
                    }}>
                        <h2>~ product groups</h2>
                    </Link>
                </div>
                <Link to={{
                        pathname:'/cmsLogin/cms/promotions'
                }}>
                    <h1>Promotions</h1>
                </Link>
                <div className="navContainer">
                    <Link to={{
                            pathname:'/cmsLogin/cms/employees'
                    }}>
                        <h1>Employees</h1>
                    </Link>
                    <Link to={{
                            pathname:'/cmsLogin/cms/employeesRoles'
                    }}>
                        <h2>~ Employees roles</h2>
                    </Link>
                </div>
                <Link to={{
                        pathname:'/cmsLogin/cms/employeesSchedule'
                }}>
                <h1>Schedule</h1>
                </Link>
            </div>
            : null}
        </>
    )
}