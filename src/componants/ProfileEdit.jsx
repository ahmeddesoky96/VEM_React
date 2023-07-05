import "./CSS/Profile.css";
// import { Card,Button, Col ,Row } from "react-bootstrap";
import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';

const Profile  = () => {
  const [user, setUser] = useState(); // initial user state
  const [last_name, setlast_name] = useState('');
  const [first_name,setfirst_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birth_date, setbirth_date] = useState('');
  const [location, setLocation] = useState('');
  const [ProfilePicture,setProfilePicture] = useState(null);
  const inputRef = useRef(null);
  const handleFileChange = (event) => {
    setProfilePicture(event.target.files[0]);
  }; 
  const handlePhotoClick = () => {
    inputRef.current.click();
  };
// =================================================================================================================
  useEffect(() => {
    // fetch user data from backend when component mounts
    const accessToken = localStorage.getItem("access");

    axios.get(`http://localhost:8000/profile/`,{
      headers: {
      Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        
        setUser(response.data);
    

        setfirst_name(response.data.first_name);
        setlast_name(response.data.last_name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setbirth_date(response.data.birth_date);
        setLocation(response.data.location);
        setProfilePicture(response.data.profile_picture);
      })
      .catch(error => console.error(error));
  }, []);
// ============================================================================================================
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedUser = {
      first_name:first_name,
      last_name:last_name
      ,email:email
      ,phone:phone
      ,birth_date:birth_date
      ,location:location,
      
    };
    console.log(updatedUser);
    try {
      const accessToken = localStorage.getItem("access");
      const response = await axios.put('http://localhost:8000/profile/edit',updatedUser,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
         } });
         
        } catch (error) {
          console.error(error);
          console.log(JSON.stringify(updatedUser));
        }
      };
// ==================================================================================================================
  return (
  <>
  <div className="container mt-2 w-50">
    
    <div className="row d-flex justify-content-center">
        <div className="col">
            <div className="card ">
                <div className="text-center">
                    <img src={require("../assets/user.jpg")} onChange={(e) => setProfilePicture(e.target.value)} width="150" alt="UserPhoto" class="rounded-circle"/>
                </div>
                              <div className="text-center mt-3 p-3">
                    {/* <span className="bg-pramary p-1  rounded text-white">{}</span> */}
                    <h5 className=" mb-0">{first_name} {last_name} </h5>
                    {/* <span>UI/UX Designer</span> */}
                    {user ? (
                    // <>
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex justify-content-between ">
                      <div className="txt_fieldedit  " >
                        <input type="text"   value={first_name} onChange={(e) => setfirst_name(e.target.value)}   />
                        <span></span>
                        <label>first Name</label>
                      </div>
                      <div className="txt_fieldedit ">
                        <input type="text"   value={last_name} onChange={(e) => setlast_name(e.target.value)}/>
                        <span></span>
                        <label>Last Name</label>
                      </div>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span></span>
                        <label>Email</label>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <span></span>
                        <label>Phone Number</label>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="text"  value={birth_date} onChange={(e) => setbirth_date(e.target.value)} />
                        <span></span>
                        <label>Birth Date</label>
                      </div>
                      <div className="txt_fieldedit">
                        <input type="text"  value={location} onChange={(e) => setLocation(e.target.value)}/>
                        <span></span>
                        <label>Location</label>
                      </div>
                      {/* <input type="file" name="photo" onChange={handleFileChange} style={{ display: "none" }} /> */}
                    {/* <img 
                      src={require("../assets/photo edit.png")} 
                      width={"54px"} 
                      alt="edit profile"
                      ref={inputRef}
                      onClick={handlePhotoClick}  
                      className="btn btn-light edit" 
                       /> */}
                    <div className="container">
                    <div className="row">
                    <div className="col"><input className="btn-success" type="submit" value="Save"  /></div>
                    <div className="col"><input className=" bts bg-dark" type="reset" value="reset" /></div>
                    </div>
                    </div>
                    </form>
                    ) : (   
                      <div className="text-center p-4">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
          )}        
                </div>                
            </div>
        </div>
    </div>
</div>
  </>
  );
};

export default Profile;
