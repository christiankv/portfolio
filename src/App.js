import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

import Axios from "axios"


import * as Realm from "realm-web";

// const REALM_APP_ID = "portfolio-vqwah"; // e.g. myapp-abcde
// const app = new Realm.App({ id: REALM_APP_ID });



export default function App(){
    const [name, setname]= React.useState("")
    const [email, setemail]= React.useState("")
    const [message, setmessage]= React.useState("")
    
    const contact = ()=>{
        Axios.post("https://mynanoportfolio.herokuapp.com/contact", {name,email,message} ).then(console.log("done"))

    }
    

    async function database(){
        const REALM_APP_ID = "portfolio-vqwah"; // e.g. myapp-abcde
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
    try{
        const user =  await app.logIn(credentials)
        const newinfo =  await user.functions.getAllinfo();
        // console.log("done");
        setinfo(newinfo)
    } catch(error){
        console.error(error)
    }   
        }
    const [info, setinfo] = React.useState([])

    //    React.useEffect(()=>{
    //     fetch("https://christiankv.github.io/portfolio/CV/CV-CHRISTIAN.KVALE.pdf")
    //     .then (res => res.text().then(setCv))
    // }, [])
    React.useEffect(  ()=> {
    database()   
 },[])
    const [version, setversion] = React.useState("about")

    // console.log(mycv);
    function form(id, value){
        if (id = "name"){
            setname(value)
        }else if(id = email){
            setemail(value)
        }else if(id = message){
            setmessage(value)
        }
    }
   
    function onClick(e){
        const newversion = e.target.id
        // console.log(e.target.id);
        setversion(() => newversion)
    }
        return(
            <div className="container">
                <Nav
                clickevent = {onClick}
                />
                <Main
                change = {form}
                content = {info}
                version = {version}
                />            
            </div>

        )
}
