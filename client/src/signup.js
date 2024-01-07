import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import background from "../src/assets/sicu-aura image.png"
import doctor from "../src/assets/doctor.png"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// ... (previous imports)

function Signup() {
    const history = useNavigate();
    const navigate = useNavigate();

    const [Hospital, setHospital] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Pincode, setPincode] = useState('');
    const [Registration, setRegistration] = useState('');
    const [Ambulance, setAmbulance] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Emergency, setEmergency] = useState('');
    const [Password, setPassword] = useState('');

    const validateForm = () => {
        if (
            !Hospital ||
            !Address ||
            !City ||
            !State ||
            !Pincode ||
            !Registration ||
            !Ambulance ||
            !Email ||
            !Phone ||
            !Emergency ||
            !Password
        ) {
            toast.error('Please fill in all the fields');
            return false;
        }

        return true;
    };


    async function submit(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }


        try {
            await axios.post("https://sisu-aura-server.onrender.com/signup", {
                Hospital,Address,City,State,Pincode,Registration,Ambulance,Email,Phone,Emergency,Password
            })
                .then(res => {
                  
                    if (res.data === "exist") {
                        alert("User already exists");
                    } else if (res.data === "notexist") {
                        history("/", { state: { id: Email } });
                    }
                })
                .catch(e => {
                   
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
        
        toast.success('Registration successful!', {
            position: 'top-center',
            hideProgressBar: false,
            closeOnClick: true,
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            onClose: () => {
                setTimeout(() => {
                  navigate('/');
                }, 5000);
              },
          });
    }


    return (
        <div className="login-container">
            <div className="image-container">
                
                <img src= {background} alt="Background"/>
            </div>
            <div className="form-container">
                <div className="img-container">
                    <img src= {doctor} alt="Logo" width="98" height="98" />
                    <h1>Sign Up /<Link to="/">Login</Link></h1>
                </div>
           
            <form >
            <div className="input-boxes">
                <div className="left-inputs">
                    <div className="form-group">
                        
                        <input type="text" onChange={(e) => setHospital(e.target.value)} placeholder="Hospital Name" />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                    </div>
                    <div className="form-group">
                       
                        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="City" />
                    </div>
                    <div className="form-group">
                       
                        <input type="text" onChange={(e) => setState(e.target.value)} placeholder="State" />
                    </div>
                    <div className="form-group">
                       
                        <input type="text" onChange={(e) => setPincode(e.target.value)} placeholder="Pincode" />
                    </div>
                    <div className="form-group">
                       
                        <input type="text" onChange={(e) => setRegistration(e.target.value)} placeholder="Hospital Registration Date" />
                    </div>
                    <div className="form-group">
                      
                        <input type="text" onChange={(e) => setAmbulance(e.target.value)} placeholder="Number Of Ambulance available" />
                    </div>
                    {/* Add more input boxes for the left side */}
                </div>

                <div className="right-inputs">
                    <div className="form-group">
                      
                        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
                    </div>
                    <div className="form-group">
                       
                        <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                       
                        <input type="text" onChange={(e) => setRegistration(e.target.value)} placeholder="Hospital Regitration Number" />
                    </div>
                    <div className="form-group">
                      
                        <input type="text" onChange={(e) => setEmergency(e.target.value)} placeholder="Emergency-Ward Number" />
                    </div>
                    <div className="form-group">
                        
                        <input type="text"  placeholder="Registration certificate Uploads" />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" />
                    </div>
                    <div className="form-group">
                        
                        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Confirm Password" />
                    </div>
                    {/* Add more input boxes for the right side */}
                </div>
            </div>

                <div className=" center-submit">
                    <input type="submit" onClick={submit} />
                </div>
                <ToastContainer />
            </form>
        </div>
        </div>
    );
}

export default Signup;
