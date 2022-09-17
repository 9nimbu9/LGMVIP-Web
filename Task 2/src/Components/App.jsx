import React, { useState } from "react";
import Axios from "axios"
import Card from "./Card"
import Spinner from 'react-bootstrap/Spinner';

function App(){
    const [userdata, setUserdata] = useState([])
    const [pg, setPg] = useState("")
    const [loading, setLoading] = useState(false)

    function data1(){
        Axios.get("https://reqres.in/api/users?page=1#").then(    
            (respond) => {
                setUserdata(respond.data.data)
                setPg(respond.data.page)
                setLoading(true)
            }
        )
    }
    

    return(
        <div className="area">
            <h1 className="area1">API HUB</h1>
            <button className="button area2" onClick={data1}>Get User data</button>
            {loading?userdata.map(datas => <Card key={datas.id} fName={datas.first_name} lName={datas.last_name} email={datas.email} avatar={datas.avatar}/>):<Spinner animation="border"/>}
        </div>
    )
}

export default App