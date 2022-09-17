import React, { useEffect, useState } from "react";
import List from "./List"

function App(){
    const [item, setItem] = useState("")
    const [store, setStore] = useState([])

    function addItem(event){
        setItem(event.target.value)
    }

    function click(event){
        event.preventDefault()
        setStore(store => [...store,item])
        setItem("")
    }

    function deleted(id){
        setStore(store => store.filter((m, index) => index !== id))
    }

    return(
        <div>
            <h1 className="title card">To Do List</h1>
            <div className="items card">
                <form>
                    <input placeholder="Add Item" className="addItem" onChange={addItem} value={item} type="text" />
                    <button className="btn" onClick={click}>+</button>
                </form>                
                {store.map((m,index) => <List key={index} id={index} onDelete={deleted} listItem={m} />)}
            </div>            
        </div>        
    )
}

export default App