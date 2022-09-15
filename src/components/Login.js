import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login () {
  
      const [UserInfo,updateUserInfo]=useState();

      const {register, handleSubmit , formState:{errors}} = useForm();


        const onSubmit=(data)=>{
            updateUserInfo(data);
             console.log(data);
        }

      console.log(errors.email);
        
  return(
       <div className="main ">
         <Container>

           
         
           <Row  className="gx=5">
 
            {/* <h1> Login</h1> */}
         
                <Col xl={5} md={5} lg={5} className="mt-2">  
                 <Row>
                  
                   <Col>
                    <h1> Login</h1>
                   </Col>
                  </Row> 
                <Row>
                 <Col>
               <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-group">
               <label>Email:</label><br></br>
                <input  className="input form-control" type="text" placeholder="abc@gmail.com" name="email" {...register("email",{
                    required:"Email is required",
                    pattern:{value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i, message:"Email is not valid"}
                })} ></input>

                <p className="error">{errors.email?.message} </p>
                </div>

                    <div className="form-group">
                <label>PassWord</label><br></br>
                <input  className="input form-control" type="password" placeholder="Password" name="passwd"  {...register("password",{

                    required:"Password is required",
                    minLength:{value:4, message:"Password must be between of length 4 to 10 characters"},
                    maxLength:{value:10, message:"Password  must  be between of length 4 to 10 characters"}
                    
                }
                
                
                )} ></input>
                <p className="error">{errors.password?.message}</p>
                </div>
              
            

               
               
                <button className="btn btn-primary form-control">Login</button>


               
                
              
              </form>
              </Col>
              </Row>

           </Col>
         
           
           <Col  xl={5} md={5} lg={5} className="mt-1" >  
          <img src={require("../images/login.png")} className="img-responsive"/>

          </Col>

         

           </Row>        
         </Container>
         </div>
          


     
  );

   
}

export default Login;
