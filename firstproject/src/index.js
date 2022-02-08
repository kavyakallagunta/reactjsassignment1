// import React from 'react';
// import ReactDOM from 'react-dom';
// function Welcome()
// {
//     return(
//         <div>
//             <h1>Welcome to BTS world</h1>
        
//         <ul>
//             <li>kimnamjoon</li>
//              <li>kimseokjin</li>
//              <li>minyoongi</li>
//              <li>j-hope</li>
//              <li>parkjimin</li>
//              <li>kimtaehyung</li>
//              <li>jungkook</li>
//         </ul> 
            
//         </div>
         
         
 
//     );
// }
// ReactDOM.render(
//     <Welcome/>,
//     document.getElementById("root")

// );

// import React from 'react';
// import ReactDOM from 'react-dom';
// import  './style.css';

// function Welcome(){
//     return(
//         <h1 style={{color:'white',backgroundColor:'red'}}>welcome to BTS world</h1>
//     );
// }
// ReactDOM.render(
//         <Welcome/>,
//          document.getElementById("root")
    
//  );

import React from 'react';
import ReactDOM from 'react-dom';
import  './style.css';
import pic from './taehyung 2.jpg';

function Welcome(){
         return(
             
            <div class='total'>
                <div  class='picture'>
                <img src={pic} /> 
                </div>
                <div class= 'content'>
                    <h2 style={{color:'red'}} >
                        KIMTAEHYUNG
                    </h2>
                    <p>
                     Kim Tae-hyung, also known by his stage name V,ia a South Korean singer and songwriter.  <br/>
                     He is a vocalist of
                    the south korean boy band BTS. <br/>
                     Name : kimtaehyung <br/>
                     Born : 30 December 1995 <br/>
                     Height : 1.79 cm  
                </p>
                  <h3 style={{color:'blue'}} > SHARE  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEARNMORE </h3>
                    

                </div>
            </div>
             
        );
     }
     ReactDOM.render(
             <Welcome/>,
             
             document.getElementById("root")
        
      );