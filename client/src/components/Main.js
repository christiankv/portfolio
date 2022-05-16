import React, { version } from "react";
import Axios from "axios";
import {Formik, Form , useField, yupToFormErrors} from "formik"
import * as Yup from "yup"

export default function Main(prop){
    const version = prop.version
    const info = prop.content
    const highlight = []
    const [name, setname]= React.useState("")
    const [email, setemail]= React.useState("")
    const [message, setmessage]= React.useState("")

    
    const contact = ()=>{
        Axios.post("http://localhost:3001/contact", {name,email,message} ).then(console.log("done"))

    }
    

    const card = info.map((element, index)=> {   
        if (element.highlight === true){
            highlight.push(element)
            // console.log(element);
        }
        // console.log(index);
        const livelink = "https://christiankv.github.io/portfolio"+ element.link + "index.html"
        const gitlink = "https://github.com/christiankv/portfolio/tree/main/" + element.link
        const theclass = "card " + element.id
        return(
     <div className={theclass} 
        
        onClick={()=>prop.clickevent(theclass, index)}>
            <div className="c-languange">
                <small>{element.language}</small>
            </div>
         <h3 className="c-title">{element.title}</h3> 
        
        <p className="c-info">{element.info}</p>
        <div className="c-links">
            <a href={livelink}>live-version</a> <br/>
            <a href={gitlink}>github</a>
            </div> 

    </div>)})
const highcard = highlight.map((element, index)=> {  
    const livelink = "https://christiankv.github.io/portfolio"+ element.link + "index.html"
    const gitlink = "https://github.com/christiankv/portfolio/tree/main/" + element.link 
       // console.log(index);
        const theclass = "card " + element.id
        return(
     <div className={theclass} 
        
        onClick={()=>prop.clickevent(theclass, index)}>
        <small className="c-languange">{element.language}</small> <h3 className="c-title">{element.title}</h3> 
        
        <p className="c-info">{element.info}</p>
        <div className="c-links">
            <a href={livelink}>live-version</a> <br/>
            <a href={gitlink}>github</a>
            </div>

    </div>)})
    function About(){
        return(
            <div className="about" >
                <h2>welcome</h2>
                <p>my name is Christian </p>
                <p>im new to programing but have now learned html, css , javascript and python</p>
                <p>and have tuched upon databses like firebase, sql and mongoDB</p>
            </div>
        )
    }
    function Projects(){
        return(
        <div className="projects">
                <h2>Projects</h2>
                <p>highlights</p>
                <div className="highlights">
                    {highcard}


                </div>
                <p> all projects</p>
                <div className="projectsall">
                    {card}
                </div>

        </div>)
    }

    function Cv(){
        return (
            <div className="cv">
                <embed src="https://christiankv.github.io/portfolio/CV/CV-CHRISTIAN.KVALE.pdf" width="100%" height="100%" />


            </div>

        )
    }

    function Contact(){
        const Textinput = ({label, ...props}) => {
            const [field, meta] = useField(props)
            return(<div>

                <label htmlFor={props.id||props.name}>{label} </label>
                <input{...field}{...props}/>{meta.error}
                {meta.touched && meta.error?(
                    <p className="error"></p>
                ):null}
            </div>
            )
        }

        function formSend(e){
            setname(e.name)
            setemail(e.email)
            setmessage(e.message)
            contact()
        }
        return(

            <Formik initialValues={{name:""}}
            onSubmit={(e)=>formSend(e)} 
            validationSchema={Yup.object({
                name:Yup.string()
                .required("please enter your name"),
                message:Yup.string()
                .required("please write your message")
            })}>
                <Form>
                    <Textinput label = "name"
                    name = "name"
                    type = "text" />
                    <Textinput label = "email"
                    name = "email"
                    type = "text" />
                    <Textinput label = "message"
                    name = "message"
                    type = "text" />
                    <button type="submit">send</button>        
                </Form>
            </Formik>
            // // <form>
            
            // <label for="name"> fullname</label>
            // <input type="text" id="name" name="name"  onChange={(e)=>prop.change(e.target.id, e.target.value) }/>
            // <label for="email"> email</label>
            // <input type="email" id="email"  name="email" onChange={(e)=>prop.change(e.target.id, e.target.value) } />
            // <label for="msg"></label>
            // <textarea id="msg" name="msg"  onChange={(e)=>prop.change(e.target.id, e.target.value) }></textarea>
            // <button>send</button>
            // // </form>

        )
    }
    function Sitechoser(){
            if (version === "about"){
                return <About/>
            }else if (version === "projects"){
                return <Projects/>
            }else if (version === "cv"){
                return <Cv/>
            }else if (version === "contact"){
                return  <Contact/>
            }
    }
    return (
        // <About/>
        // <Projects/>
            <Sitechoser/>
        // <Contact/>
    )
            
     

    
}