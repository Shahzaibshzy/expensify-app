/// Higher Order Components or HOC is the component who renders other components
//it is use to reuse code, render hijacking, Prop manipulation, abstract state

import React from "react";
import ReactDOM  from "react-dom/client";

const Info = (props) => (

    
<div>
    <h1>Info</h1>
        <p>this is my info: {props.info}</p>
 </div>

);

const WithAdminInfo = (WrappedInfo) => {

    return (props) => (
        <div>
        {props.isAdmin && <p> this is admin info</p>}
        <WrappedInfo {...props}/>
        </div>
    )
};

const RequiredAuthentication = (WrappedInfo) => {

    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedInfo {...props}/>) : ( <p>you are not authorize</p>)}
        
        </div>
    )
};
//const AdminInfo = WithAdminInfo(Info);

const AuthInfo = RequiredAuthentication(Info);

var appRoot = document.getElementById("app");
const root = ReactDOM.createRoot(appRoot);
//root.render(<AdminInfo isAdmin = {true} info = "there are details" />);
root.render(<AuthInfo isAuthenticated = {true} info = "there are details in authentication" />);
