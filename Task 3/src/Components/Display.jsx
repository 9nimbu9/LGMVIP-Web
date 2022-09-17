import React from "react";

function Display(props){

    function deletes(){
        props.onDelete(props.id)
    }

    return(
        <div className="data">
            <img src="Delete.png" className="delete" onClick={deletes}/>                                   
            <div className="card">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="enroll"><b>{props.name}</b></p>
                        <p className="enroll">{props.gender}</p>
                        <p className="enroll emails">{props.email}</p>
                        <a className="enroll websites" href={props.website}><p>{props.website}</p></a>
                        <p className="enroll">{props.skills}</p>
                    </div>
                    <div className="col-lg-6 imgs">
                        <img className="images" src={props.image} onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="Image.png";}}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
} 

export default Display