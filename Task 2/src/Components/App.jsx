import React, { useState } from "react";
import Axios from "axios"
import Card from "./Card"
import Spinner from 'react-bootstrap/Spinner';

function App(){
    const [userdata1, setUserdata1] = useState([])
    const [userdata2, setUserdata2] = useState([])
    const [loading, setLoading] = useState(true)

    function data1(){
        setLoading(false)
        Axios.get("https://reqres.in/api/users?page=1#").then(    
            (respond) => {
                setUserdata1(respond.data.data)
                Axios.get("https://reqres.in/api/users?page=2#").then(
                    (respond) => {
                        setUserdata2(respond.data.data)
                    } 
                )
                setLoading(true)
            }
        )
    }
    

    return(
        <div className="area">
            <h1 className="area1">API HUB</h1>
            <button className="button area2" onClick={data1}>Get User data</button>
            {loading?userdata1.map(datas => <Card key={datas.id} fName={datas.first_name} lName={datas.last_name} email={datas.email} avatar={datas.avatar}/>):<Spinner style={{marginLeft: "150%"}} animation="border"/>}
            {userdata2.map(datas => <Card key={datas.id} fName={datas.first_name} lName={datas.last_name} email={datas.email} avatar={datas.avatar}/>)}
        </div>
    )
}

export default App