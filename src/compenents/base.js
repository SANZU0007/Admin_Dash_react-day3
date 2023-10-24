import { useState } from "react";
import Dashboard from "./dashboard";

import { useNavigate } from "react-router-dom";

function Base(){
    let navigate = useNavigate();

    function change(){
        setShow(!show);
        let angle = document.querySelector(".angle");
        console.log(angle.className)
        if(angle.className=="fa-solid fa-angle-right angle"){
            angle.className="fa-solid fa-angle-down angle";
        }
        else{
            angle.className="fa-solid fa-angle-right angle";
        }
    }
    let [show, setShow] = useState(false);
    return (
        <div className="base-div">
            <div className="inner-div">
            <div className="menu">
            <div className="left-menu">
                <h4 className="h4"><i class="fa-sharp fa-solid fa-face-smile smile"></i>SB ADMIN <sup>2</sup></h4>
                <button className="dashboard-btn" onClick={()=>navigate("/")}><i class="fa-solid fa-gauge-high"></i>Dashboard</button>
                <div className="interfaces">
                    <p className="inter">Interface</p>
                    <h4 onClick={change} className="settings"><i class="fa-solid fa-gear gear"></i>Components<i class="fa-solid fa-angle-right angle"></i></h4>
                    <div className="components">
                        
                        {show && (<div className="components-child">
                        <p>Custom components</p>
                        <button onClick={()=>navigate("/buttons")}>Buttons</button>
                        <button>Cards</button>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="nav-search">
                <div className="search">
                <input type="text" placeholder="Search for...."/>
                <span><i className="fa-sharp fa-solid fa-magnifying-glass search-icon"></i></span>
                </div>
                <div className="account">
                <i className="fa-sharp fa-solid fa-bell bell"></i>
                <i className="fa-sharp fa-solid fa-envelope envelope"></i>
                <span className="name">Sanjay</span>
                <img src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"/>
                </div>
                
                
            </div>
            <Dashboard/>
            {/* <Buttons/> */}
            </div>
            

            </div>
            </div>
            </div>
    )
}
export default Base;