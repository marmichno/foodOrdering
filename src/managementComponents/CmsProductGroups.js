import {CmsNavbar} from './CmsNavbar';

export const CmsProductGroups = () =>{

    const groups = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

    return(
        <div className="productGroupsMainContainer">
            <CmsNavbar/>
            <div className="productGroupsContent">
                <div className="groupRow">
                    <div><h1>id</h1></div>
                    <div><h1>Group name</h1></div>
                    <div><h1>Products in group</h1></div>
                    <div><h1>Edit</h1></div>
                </div>

                <div className="addGroupContainer">
                    <input type="text" placeholder="group name" autocomplete="off" name="category" required></input><button>Add product group</button>
                </div>

                {groups.map(value => {
                    return(
                        <div className="groupRow">
                            <div><p>1</p></div>
                            <div><p>Sushi rolls</p></div>
                            <div><p>26</p></div>
                            <div><button>modify</button><button>delete</button></div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}