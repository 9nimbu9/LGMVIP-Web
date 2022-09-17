import React from "react";

function Card(props){
    return(
        <div>
            <div className="card area1" style={{backgroundColor: "#F2F2F2"}}>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="label"><b>Name</b></p>
                        <p>{props.fName} {props.lName}</p>
                        <p className="label"><b>Email</b></p>
                        <p>{props.email}</p>
                    </div>
                    <div className="col-lg-6">
                        <img src={props.avatar}/>
                    </div>
                </div>
            </div>   
        </div>        
    )
}

export default Card