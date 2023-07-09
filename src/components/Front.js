import React from "react";
import './Front.css';
function Front(){
    return <>
    
      <div className="main" >
      <div class="fig1"></div>
    
      <div style={{display:"flex",flexDirection:"column"}}>
      {/* <div class="fig2"></div> */}
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="60px" height="70px">
  <path fill="#08BDBA" d="M32.6,-47.7C46.6,-41.7,65.4,-40.1,76.8,-30.5C88.2,-21,92.2,-3.6,88.6,11.9C85,27.3,73.8,40.7,59.8,45.4C45.8,50.1,29.1,46.1,14.2,52.2C-0.7,58.3,-13.7,74.6,-26.3,76.7C-38.9,78.8,-51,66.8,-60,53.6C-69,40.4,-74.8,26,-78.7,10.3C-82.5,-5.4,-84.4,-22.4,-79.4,-37.4C-74.3,-52.4,-62.3,-65.3,-47.9,-71.1C-33.5,-77,-16.7,-75.8,-3.7,-70C9.3,-64.2,18.6,-53.8,32.6,-47.7Z" transform="translate(100 100)" />
</svg>
      <div class="mango"></div>
     
      </div>
      
      <div style={{display:"flex",flexDirection:"column"}}>

      <div className="header">Investor Relations</div>
      <p class="font-bold ... text-lg">Headline 3</p>
      <div style={{display:"flex",alignItems:"baseline"}}>
       
        <input type="text"  className="inp"></input>
        <button class="bg-teal-600 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded-full mt-12 butt"> 
                            YourEmail</button>
                            </div>                
      </div>

      <div>
        <img src="https://img.freepik.com/free-photo/forex-trade-graph-chart-concept_53876-132317.jpg?w=996&t=st=1688814650~exp=1688815250~hmac=ffcfd7082c824bb3108ae290c4220cac1ce1188c3d8a48b8747c4f6711571507" className="img1"></img>
        
      </div>
     
      
      </div>
        
    </>
}

export default Front;