import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {showCmsNavbar} from '../../../actions/index';

export const CmsNavbar = () => {

    const location = window.location.href;
    const dispatch = useDispatch();
    const showNavbar = useSelector(state => state.cmsNavbarReducer);

    useEffect(() => {

        if(location.search("cmsLogin/cms") !== -1){
        }else{
        }

    }, [location]);

    return(
        <>
            <div className="hamburgerMenu">
                <FiMenu onClick={() => dispatch(showCmsNavbar())}/>
            </div>
            {showNavbar ?
            <div className="cmsNavbar">
                <div className="close">
                    <AiOutlineClose onClick={() => dispatch(showCmsNavbar())}/>
                </div>
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