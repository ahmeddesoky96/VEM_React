import "./CSS/Profile.css";
import { Container } from "react-bootstrap";
// import Dropzone from './Dropzone';
import React, { useState, useEffect
  // ,useRef
} from 'react';
// import Dropzone from 'react-dropzone';
 import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const AddShop  = () => {
// ===========================================================
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [templates,setTemplates] = useState(null);
  const owner = localStorage.getItem("email");
  const [categories, setCategories] = useState([]);
  const [template, setTemplate] = useState("");
  const [category, setcategory] = useState("");

  // const inputRef = useRef(null);
// -==================================================================================================
  
   const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
  };

   const handlecategoriesChange = (event) => {
    setcategory(event.target.value);
  };

// ================================================================================================
  const navigate=useNavigate()
  const handleSubmit = async (event) => {
  event.preventDefault();
  const Addshop = {
    title,
    owner: "1",
    details,
    template,
    category
  };
  try {
    const accessToken = localStorage.getItem("access");
    const response = await axios.post('http://127.0.0.1:8000/shop/add/',JSON.stringify(Addshop),{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
       } });
        console.log(response.data);
        console.log(JSON.stringify(Addshop));
         navigate("/profile")
        
      } catch (error) {
        console.error(error);
        console.log(JSON.stringify(Addshop));
      }
    };
// ============================================================================================================================
  useEffect(() => {
  const accessToken = localStorage.getItem("access");
  axios.get('http://127.0.0.1:8000/shop/1/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .then(response => {
    setCategories(response.data.categories);
    setTemplates(response.data.templates);
  })
  .catch(error => {
    console.error('Error fetching items:', error);
  });
  }, []);
  // ============================================================================================================
  return (
   <Container>
    <div className="row">
  <div className="col-6 col-md-4 hide">
            <div className="card p-4 showinfo ">
                 <div className="text-center">
                    <img src={require("../assets/user.jpg")} width="150" alt="UserPhoto" className="rounded-circle"/>
                </div>
                    <div className="text-center p-1">
                    <h5 className="mt-2 mt-1">{title}</h5>
                    {/* <span className=".text-primary p-1 px-4 rounded ">Seller</span>
                    <img src={require("../assets/quality.png")} width="30" alt="quality" /> */}
                    {/* <span>UI/UX Designer</span> */}                    
                    {/* <div className="p-2 "> */}
                        <p className="fonts discration">{ details ? details : "NO Details "   } </p>
                    </div  >
                    <form >
                      <div className="txt_field1 ">
                <input type="text" className="text-end" value={owner} readOnly />
               
                        <span></span>
                        <label>owner :</label>
                      </div>
                      <div className="txt_field1">
                <input type="text"
                  value={category}
                  readOnly />
                        <span></span>
                        <label>category</label>
              </div>
              <div className="txt_field1">
                <input type="text"
                  value={template}
                   readOnly />
                        <span></span>
                        <label>Template</label>
                      </div>
                    </form>

            </div>
       
    </div>

    {/* ------------------------------------------------------------------------------------------------- */}
  <div className="col-12 col-lg-8 mt-2">
     {/* ========================================================================== */}
     <form onSubmit={handleSubmit}>
  <div className="card ">
  <div className="card-header">Fill in the information required to create a new market</div>
  <div className="card-body">
    <blockquote className="blockquote mb-0"> 
                  
               {/* ============================================================================== */}

               {/* ============================================================================== */}

                      <div className="form-outline">
                      <label className="form-label" for="formControlLg">TITLE</label>
                          <input 
                          type="text" 
                          onChange={(e) => setTitle(e.target.value)}                          
                          id="formControlLg" 
                          className="form-control " />
                        </div>
               {/* ============================================================================== */}

                        <div className="form-outline">
                        <label className="form-label" for="formControlLg">OWNER</label>
                          <input 
                          type="text" 
                          // onChange={(e) => setOwner(e.target.value)}
                          value={owner}                          
                          id="formControlLg" 
                          className="form-control " readOnly />
                        </div>
               {/* ============================================================================== */}
                        <div className="form-outline">
                        <label className="form-label" for="formControlLg">Details</label>
                        <textarea
                          type="text"
                          onChange={(e) => setDetails(e.target.value)}                           
                          id="formControlLg" 
                          className="form-control " rows="4" ></textarea>
                        </div>
               {/* ============================================================================= */}
               <div className="form-outline">
                        <label className="form-label" for="formControlLg">Category</label>
                    <select className="form-select  mb-3" aria-label=".form-select-lg example"
                      onChange={handlecategoriesChange}
                      value={category}
                    >
                      <option >select one Category</option>
                      {categories ? categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      )) : <option >null</option>};
                         
                        </select>
                      </div>
               {/* ============================================================================= */}
                        <div className="form-outline">
                        <label className="form-label" for="formControlLg">Template</label>
                    <select className="form-select  mb-3" aria-label=".form-select-lg example"
                      onChange={handleTemplateChange}
                      value={template}
                      name="Template"
                    >
                      <option >select one Templates </option>
                      {templates ? templates.map(template => (
                        <option key={template.id} value={template.id}>{template.name}</option>
                      )) : <option value="">null</option>};
                        </select>
                      </div>
               {/* ============================================================================= */}
                     
              
      {/* <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p> */}
    </blockquote>
    </div>

       </div>
    {/* ===================================================================================================== */}
       <div className="card mt-3 ">
  <div className="card-header">
  Choose a image the market
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <h1>image shop</h1> 
  
      <div>
                              <div className="">
                                  <div className="btn btn-info btn-rounded">
                                      <label className="form-label text-white m-1" for="customFile1"  >
                                        select image shop 
                                      {/* <img src={require("../assets/photo edit.png")} width={"24px"} alt="edit profile"/> */}
                                      </label>
                                      <input
                                       type="file" 
                                       className="form-control d-none"  
                                       id="customFile1"
                                      //  ref={inputRef}
                                      //  value={ProfilePicture}
                                      //  onChange={(e) => setProfilePicture(e.target.value)} 
                                       />
                                  </div>
                              </div>
                          </div> 
     
      <p className="blockquote-footer mt-3">Someone famous in <cite title="Source Title">Source Title</cite></p>
    </blockquote>
    </div>

       </div>
    {/* ---------------------------------------------------------------------------------------- */}
     {/* ===================================================================================================== */}
     {/* <div className="card mt-3 ">
  <div className="card-header">
  Choose a model htmlforthe market
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <h1>backgrond image shop</h1> 
  
      <div>
                              <div className="">
                                  <div className="btn btn-info btn-rounded">
                                      <label className="form-label text-white m-1" for="customFile1"  >
                                        select image
                                       <img src={require("../assets/photo edit.png")} width={"24px"} alt="edit profile"/>
                                      </label>
                                      <input
                                       type="file" 
                                       className="form-control d-none"  
                                       id="customFile1"
                                      //  ref={inputRef}
                                      //  value={ProfilePicture}
                                      //  onChange={(e) => setProfilePicture(e.target.value)} 
                                       />
                                  </div>
                              </div>
                          </div> 
     
      <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p>
    </blockquote>
    </div>

       </div> */}
    {/* ---------------------------------------------------------------------------------------- */}
    
    <div className="card mt-3 ">
  <div className="card-body">
    <blockquote className="blockquote mb-0">
{/*    
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
       */}

          <div className="container">
                <div className="row">
                    <div className="col"><input className="btn-success" type="submit" value="Save"  /></div>
                    <div className="col"><input className=" bts bg-dark" type="reset" value="reset" /></div>
                </div>
            </div>
    </blockquote>
    </div>
       </div> 

    {/* ---------------------------------------------------------------------------------------- */}
    
  </form>
  </div>
  </div>
   {/* ============================================================================= */}


     
   </Container>
  );
};

export default AddShop;

