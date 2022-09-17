import React from "react";

function List(props){

    function deletes(){
        props.onDelete(props.id)
    }

    return(
        <ul>
            <img src="Delete.png" className="check" onClick={deletes}/>{props.listItem}
        </ul>
    )
}

export default List