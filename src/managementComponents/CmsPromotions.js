import {CmsNavbar} from '../managementComponents/CmsNavbar'

export const CmsPromotions = () => {
    return(
        <div className="cmsPromotionsMainContainer">
            <CmsNavbar/>
            <div className="cmsPromotionsContent">
                <div className="inputContainer">
                    <h1>Choose promotion type:</h1> 
                    <select>
                        <option>All transactions promotion</option>
                        <option>Product promotion</option>
                        <option>Product group promotion</option>
                        <option>Repeating promotion</option>
                    </select>
                </div>
            </div>
        </div>
    )
}