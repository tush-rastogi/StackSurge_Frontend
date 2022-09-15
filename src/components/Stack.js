import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';
import React from 'react';
// import './Login.css';
function Stack(){
    
      const data=[
         {
 
             id:"1",
            title:"Tom Stack",
           text:"Apache Tomcat is a free and open-source implementation of the Jakarta Servlet,Jakarta Expression Language, and WebSocket technologies. Tomcat provides a pure Java HTTP web server environment in which Java code can run.",
           image:'apachetomcat.jpg'

        },

        {
 
             id:"2",
            title:"Code Stack",
             text:"Features a fully integerated vscode container with support for C,C++,Python and Java",
             image:"vscode.png"
  
          },

            {
 
             id:"3",
             title:"Base System",
             text:"A Base linux System",
             image:"linux.png"
  
           },

           {
            id:"4",
            title:"Vs Code",
            text:"Visual Studio Code",
            image:"linux.png"
           }
           
           
      
      ]
       
      
 
       return(

         <div >
        <Container fluid >
        <Row>
          {data.map((props) => {
            return (
              <Col xs={12} sm={6} xl={3} md={6} lg={3}>
                <Cards key={props.id} cardInfo={props}  />
              </Col>
            );
          })}
        </Row>
      </Container>
      </div>

       )
      
}

export default Stack;