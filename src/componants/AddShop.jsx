import React from "react";
import "./CSS/Profile.css";
import { Container } from "react-bootstrap";
// import Dropzone from './Dropzone';
import { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';


// import axios from 'axios';
// import { Link } from "react-router-dom";
const AddShop  = () => {
// ================================================================================================
// const [userInfo, setUserInfo] = useState(null);
// const [shopInfo, setShopInfo] = useState(null);

// useEffect(() => {
//   axios.get('http://localhost:8000/profile/1')
//     .then(response => setUserInfo(response.data)) 
  // const formData = new FormData();
  // formData.append('file', selectedFile);

    
//     .catch(error => console.log(error));
// }, []);

// useEffect(() => {
//   axios.put('http://127.0.0.1:8000/shop/rated')
//     .then(response => setShopInfo(response.data))

//     .catch(error => console.log(`this is error ${error}`));
// }, []);
const [selectedFile, setSelectedFile] = useState(null);

  return (
   <Container>
    <div className="row">
  <div className="col-6 col-md-4 hide">
            <div className="card p-4 showinfo ">
                {/* <div className="text-center">
                    <img src={require("../assets/user.jpg")} width="150" alt="UserPhoto" className="rounded-circle"/>
                </div> */}
                    <div className="text-center p-1">
                    <h5 className="mt-2 mt-1">title</h5>
                    {/* <span className=".text-primary p-1 px-4 rounded ">Seller</span>
                    <img src={require("../assets/quality.png")} width="30" alt="quality" /> */}
                    {/* <span>UI/UX Designer</span> */}                    
                    {/* <div className="p-2 "> */}
                        <p className="fonts discration">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div  >
                    <form >
                      <div className="txt_field1">
                        <input type="text"   />
                        <span></span>
                        <label>owner :</label>
                      </div>
                      <div className="txt_field1">
                        <input type="text"    />
                        <span></span>
                        <label>category</label>
                      </div>
                    </form>

            </div>
       
    </div>

    {/* ------------------------------------------------------------------------------------------------- */}
  <div className="col-12 col-md-8 mt-2">
  <div className="card ">
  <div className="card-header">Fill in the information required to create a new market</div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      
      <form>
                      <div className="txt_field">
                        <input type="email" />
                        <span></span>
                        <label>Title</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>discration</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>other owner</label>
                      </div>
                      <div className="txt_field">
                        <input type="text"  />
                        <span></span>
                        <label>owner</label>
                      </div>
                      <div className="txt_field">
                        <input type="password"  />
                        <span></span>
                        <label>catogry</label>
                      </div>
                    </form>

     
      {/* <p class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p> */}
    </blockquote>
    </div>

       </div>

    {/* ---------------------------------------------------------------------------------------- */}
    
  <div className="card mt-3 ">
  <div className="card-header">
  Choose a model for the market
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      {/* <h1>tamplate</h1> */}
  <div className="checkboximge">
      <ul>
  <li>
    <input type="checkbox"for="myCheckbox1" id="myCheckbox1" />
    <label for="myCheckbox1" ><img  alt="#" src={require("../assets/imgtest.jpg")} /></label>
  </li>
  <li>

    <input type="checkbox" for="myCheckbox2" id="myCheckbox2" />
    <label for="myCheckbox2" ><img alt="#" src={require("../assets/imgtest.jpg")} /></label>
  </li>
  <li>

    <input type="checkbox" for="myCheckbox3" id="myCheckbox3" />
    <label for="myCheckbox3" ><img alt="#" src={require("../assets/imgtest.jpg")} /></label>
  </li>
  <li>

<input type="checkbox" for="myCheckbox4" id="myCheckbox4" />
<label for="myCheckbox4" ><img  alt="#" src={require("../assets/imgtest.jpg")} /></label>
</li>
<li>

<input type="checkbox" for="myCheckbox5" id="myCheckbox5" />
<label for="myCheckbox5" ><img alt="#" src={require("../assets/imgtest.jpg")} /></label>
</li>

</ul>
</div>
      {/* #
<div class="row">
    <div class="col-md-3">
        <div class="custom-control custom-radio image-checkbox">
            <input type="radio" class="custom-control-input" id="ck2a" name="ck2"/>
            <label class="custom-control-label" for="ck2a">
                <img src={require("../assets/imgtest.jpg")} alt="#" class="img-fluid"/>
            </label>
        </div>
    </div>
    <div class="col-md-3">
        <div class="custom-control custom-radio image-checkbox">
            <input type="radio" class="custom-control-input" id="ck2b" name="ck2"/>
            <label class="custom-control-label" for="ck2b">
                <img src={require("../assets/imgtest.jpg")} alt="#" class="img-fluid"/>
            </label>
        </div>
    </div>
    <div class="col-md-3">
        <div class="custom-control custom-radio image-checkbox">
            <input type="radio" class="custom-control-input" id="ck2c" name="ck2"/>
            <label class="custom-control-label" for="ck2c">
                <img src={require("../assets/imgtest.jpg")} alt="#" class="img-fluid"/>
            </label>
        </div>
    </div>
    <div class="col-md-3">
        <div class="custom-control custom-radio image-checkbox">
            <input type="radio" class="custom-control-input" id="ck2d" name="ck2"/>
            <label class="custom-control-label" for="ck2d">
                <img src={require("../assets/imgtest.jpg")}  alt="#" class="img-fluid"/>
            </label>
        </div>
    </div>
</div> */}

     
      <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p>
    </blockquote>
    </div>

       </div>
    {/* ---------------------------------------------------------------------------------------- */}
    <div className="card mt-3 ">
  <div className="card-header">Add Image IN YOUR SHOP
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
   
      <Dropzone onDrop={acceptedFiles => setSelectedFile(acceptedFiles[0])}>
        {({getRootProps, getInputProps}) => (
        <section  >
          <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="text-center">Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
           )}
      </Dropzone>
      
      <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p>
    </blockquote>
    </div>
       </div>

    {/* ---------------------------------------------------------------------------------------- */}

  </div>
  </div>
   </Container>
  );
};

export default AddShop;

