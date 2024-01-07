import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import client from "../src/assets/support.png"

function Home() {
    const [users, setUsers] = useState([]);
    const [rightClicked, setRightClicked] = useState(false);

    const handleToggleClick = () => {
      setRightClicked((prevRightClicked) => !prevRightClicked);
    };

    useEffect(() => {
     
      fetch('https://sisu-aura-server.onrender.com/data')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching user data:', error.message));
    }, []); 
    
  return (
    <>
    <Navbar/>
    <div className="hos-reg-main">
    <div style={{ textAlign: 'right' ,marginRight:'130px',marginTop:'20px' }}>
      <img src={client} alt="Company Logo" style={{ height: '60px', width: '100%', maxWidth: '62px' }} />
    </div>
        
        <div className="hos-reg-search-filter">
            <h1>Hospital Registrations</h1>
        </div>
        <div className="hos-reg-detail">
            {rightClicked ? (
              <>
              <div className="detail-data">
             
             <p className="curved-background">No.</p>
                 
                 <div className="data">
                     {users && users.map((data, i)=>(<p key={i}>{data._id}</p> ))}
                 </div>
             </div>
             <div className="detail-data">
                 <p>Date&Time</p>
                 <div className="data">
                     {users && users.map((data, i)=>(<p key={i}>{data.Registration} </p>))}
                 </div>
                 
             </div>
             <div className="detail-data">
                 <p>Hospital Name</p>
                 <div className="data">
                     {users.map((data, i)=>(<p key={i}>{data.Hospital} </p>))}
                 </div>
             </div>
             <div className="detail-data">
                 <p>Email</p>
                 <div className="data">
                     {users.map((data, i)=>(<p key={i}>{data.Email} </p>))}
                 </div>
             </div>
             <div className="detail-data">
                 <p>Address</p>
                 <div className="data">
                     {users.map((data, i)=>(<p key={i}>{data.Address} </p>))}
                 </div>
             </div>
             <div className="detail-data">
                 <p>Phone</p>
                 <div className="data">
                     {users.map((data, i)=>(<p key={i}>{data.Phone} </p>))}
                 </div>
             </div>
             <div className="detail-data">
                 <p>City</p>
                 <div className="data">
                     {users.map((data, i)=>(<p key={i}>{data.City} </p>))}
                 </div>
             </div>
             <div className="detail-data">
                 <p>State</p>
                 <div className="data">
                     {users.map((data, i)=>(<p key={i}>{data.State} </p>))}
                 </div>
             </div>
             <div className="detail-data">
                 <p className="curved-background-right">PinCode</p>
                 <div className="data">
                     {users.map((data, i)=>(<p key={i}>{data.Pincode} </p>))}
                 </div>
             </div>
             </>
            ) : (
              <>
              <div className="detail-data">
                <p className="curved-background">Hospital Registration Date</p>
                <div className="data">
                    {users.map((data, i)=>(<p key={i}>{data.Registration} </p>))}
                </div>
            </div>
            <div className="detail-data">
                <p>Hospital Registration Number</p>
                <div className="data">
                    {users.map((data, i)=>( <p key={i}>{Math.floor(Math.random() * 900000000) + 100000000}</p>))}
                </div>
            </div>
            <div className="detail-data">
                <p>Hospital Registration Photo</p>
                <div className="data">
                    {users.map((data, i)=>(<p key={i}> File </p>))}
                </div>
            </div>
            <div className="detail-data">
                <p>Emergency Ward Number</p>
                <div className="data">
                    {users.map((data, i)=>(<p key={i}>{data.Emergency} </p>))}
                </div>
            </div>
            <div className="detail-data">
                <p>Number of Ambulance</p>
                <div className="data">
                    {users.map((data, i)=>(<p key={i}>{data.Ambulance} </p>))}
                </div>
            </div>
            <div className="detail-data">
                <p className="curved-background-right">Status</p>
                <div className="data">
                    {users.map((data, i)=>( <p key={i} >Available</p>))}
                </div>
            </div>
            </>
            ) }
       </div>
        <div style={{ width: '90%',marginTop: '20px',display:'flex' ,justifyContent:'end' }}>
        <button onClick={handleToggleClick}
        style={{
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#4CAF50', 
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        >
          Show more
        </button>
      </div>
    </div>
    </>
  )
}

export default Home;
