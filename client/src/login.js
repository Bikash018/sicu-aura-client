import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import background from "../src/assets/sicu-aura image.png"
import doctor from "../src/assets/doctor.png"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

    const history=useNavigate();
    const [Hospital, setHospital] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Acode, setAcode] = useState('')
  
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("https://sisu-aura-server.onrender.com/",{
                Email,Password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/capture")
                }
                else if(res.data=="notexist"){
                    // alert("User have not sign up")
                    toast.error('User Does Not Exist please SignUp first');
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
 

    return (
       <div className="login-container">
        <div className="image-container">
            <img src= {background} alt="Background"/>
        </div>
        <div className="form-container">
            <div className="img-container loginnav">
                <img src= {doctor} alt="Logo" width="98" height="98" />
                <h1><Link to="/signup">Sign Up</Link> / Login</h1>
            </div>
       
        <form>
                <div className="card-container">
                        <div className="card">
                            <h3>Welcome to Sicu-aura</h3>
                            <p>Your one stop safety solutions using innovative technology</p>
                          
                            <div className="form-group">
                                <input type="text" onChange={(e) => setHospital(e.target.value)} placeholder="Hospital Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={(e) => setAcode(e.target.value)} placeholder="Special Access Code" />
                            </div>
                           

                        </div>
                    </div>
 

            <div className=" center-submit login-s">
                <input type="Submit" onClick={submit} />
            </div>
            <ToastContainer/>
        </form>
    </div>
    </div>
);
    
}

export default Login