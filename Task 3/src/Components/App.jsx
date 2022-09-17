import React, { useState } from "react";
import Display from "./Display";
import Label from "./Labels"

function App(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")
    const [image, setImage] = useState("")
    const [gender, setGender] = useState("")
    const [maleremove, setMaleremove] = useState(false)
    const [femaleremove, setFemaleremove] = useState(false)
    const [html, setHtml] = useState(false)
    const [css, setCss] = useState(false)
    const [javascript, setJavascript] = useState(false)
    const [store, setStore] = useState([])

    function names(event){
        setName(event.target.value)
    }
    function emails(event){
        setEmail(event.target.value)
    }
    function links(event){
        setWebsite(event.target.value)
    }
    function images(event){
        setImage(event.target.value)
    }
    function genders(event){
        setGender(event.target.value)
        event.target.value==="Male"?setMaleremove(event.target.checked)&&setFemaleremove(false):
        setFemaleremove(event.target.checked) && setMaleremove(false)
    }
    function htmls(event){
        setHtml(event.target.checked)                
    }
    function csss(event){
        setCss(event.target.checked)
    }
    function javascripts(event){
        setJavascript(event.target.checked)
    }
    function clicked(event){
        let obj = {
            Name: name,
            Email: email,
            Website: website,
            Image: image,
            Gender: gender,
            Skill: [
                html && "HTML ",
                css && "CSS ",
                javascript && "JavaScript "
            ],
            Dummy: images
        }
        setStore(store => [...store,obj])
        event.preventDefault()   
        setName("")
        setEmail("")
        setWebsite("")
        setImage("")
        setGender("")
        setMaleremove(false)
        setFemaleremove(false)
        setCss(false)
        setHtml(false)
        setJavascript(false)
    }

    function clear(event){
        event.preventDefault()   
        setName("")
        setEmail("")
        setWebsite("")
        setImage("")
        setGender("")
        setMaleremove(false)
        setFemaleremove(false)
        setCss(false)
        setHtml(false)
        setJavascript(false)
    }
    
    function deleted(id){
        setStore(store => store.filter((s,index) => id!==index))        
    }

    return(     
        <div>
            <h1 className="heading">STUDENT ENROLLMENT FORM</h1>
            <div className="row">
                <div className="col-lg-6">
                    <form className="form">
                        <div className="box">
                            <Label label="Name" /><input value={name} onChange={names} type="text"/>
                            <br/>
                            <Label label="Email" /><input value={email} onChange={emails} type="email"/>
                            <br/>
                            <Label label="Website" /><input value={website} onChange={links} type="text"/>
                            <br/>
                            <Label label="Image Link" /><input value={image} onChange={images} type="text"/>
                        </div>

                        <Label label="Gender:"/>
                        <div className="box">
                            <input className="radio" value="Male" name="gender" checked={maleremove} onChange={genders} type="radio"/><label className="gender">Male</label>
                            <br/>
                            <input className="radio" value="Female" name="gender" checked={femaleremove} onChange={genders} type="radio"/><label className="gender">Female</label>
                        </div>      

                        <Label label="Skills:"/> 
                        <div className="box">
                            <input className="radio" checked={html} onChange={htmls} value="HTML" name="HTML" type="checkbox"/><label className="gender">HTML</label>
                            <br/>
                            <input className="radio" checked={css} onChange={csss} value="CSS" name="CSS" type="checkbox"/><label className="gender">CSS</label>
                            <br/>
                            <input className="radio" checked={javascript} onChange={javascripts} value="JavaScript" name="JavaScript" type="checkbox"/><label className="gender">JavaScript</label>
                        </div>

                        <button className="btn btn-dark" type="submit" onClick={clicked}>Submit</button>
                        <br/>
                        <button className="btn btn-danger" type="submit" onClick={clear}>Clear</button>
                    </form>
                </div>
                <div className="col-lg-6 design">
                    <h1 style={{color: "#8758FF"}}>Enrolled Students</h1>
                    {store.map((s, index) => <Display key={index} id={index} onDelete={deleted} name={s.Name} email={s.Email} website={s.Website} image={s.Image} gender={s.Gender} skills={s.Skill}/>)}            
                </div>
            </div>
        </div>             
    ) 
}

export default App