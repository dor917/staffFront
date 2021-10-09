import React from "react";
import '../css/bootstrap.min.css'

function Sidebar() {
    return(
            <div className="Sidebar"> 
                <div className="logo_container">  {/*로고*/}
                    <div className="logo"> 
                        <box-icon name='navigation'></box-icon>
                            <div className="logo_Name">navigation</div>                   
                    </div>
                    <div className="Sidebar_menu">   {/*사이드바 메뉴*/}
                        <box-icon name='chevrons-right'id="btn"></box-icon>
                    </div>
                    <ul className="nav_list">   {/*사이드바 리스트*/}
                        <li >
                            <a href="#">
                             <box-icon name='bomb'></box-icon>
                                <span className="links_name">Dashboard</span>
                            </a>
                        </li>
                        <li >
                            <a href="#">
                             <box-icon name='bomb'></box-icon>
                                <span className="links_name">Dashboard2</span>
                            </a>
                        </li><li >
                            <a href="#">
                             <box-icon name='bomb'></box-icon>
                                <span className="links_name">Dashboard3</span>
                            </a>
                            <a href="#">
                                <box-icon name='dots-horizontal-rounded'></box-icon>    {/*사이드바 추가*/}
                                <span className="links_name">list_plus</span>
                            </a>
                        </li>

                    </ul>
                

                </div>

            </div>


    );


}
export default FileList;