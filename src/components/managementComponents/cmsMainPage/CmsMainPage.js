import {CmsNavbar} from '../cmsNavbar/CmsNavbar';

export const CmsMainPage = () =>{
    return(
        <div className="cmsMainPageContainer">
            <CmsNavbar/>
            <div className="cmsMainPageContent">
                <h1>There will be graphed based on sales data</h1>
            </div>
        </div>
    )
}