import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CompanyOverview.css';
function CompanyOverview(){

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 ,fontWeight:"bold"}} gutterBottom>
             20/03/2022
            </Typography>
            <Typography sx={{fontSize: 20}} component="div" color="text.secondary">
             Sustainibility in Supply Chain 
            </Typography>
            <Typography sx={{fontSize: 20}} component="div" color="text.secondary">
            Management
            </Typography>
            <br></br>
            <Typography sx={{ fontSize: 20 ,fontWeight:"bold"}} gutterBottom>
             20/03/2022
            </Typography>
            <Typography sx={{fontSize: 20}} component="div" color="text.secondary">
             Sustainibility in Supply Chain 
            </Typography>
            <Typography sx={{fontSize: 20}} component="div" color="text.secondary">
            Management
            </Typography>
            
          </CardContent>
          <button class="bg-teal-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full"> 
                            Explore More......</button>
        </React.Fragment>
      );

      const card1 = (
        <>
        <CardContent>
              <Typography sx={{ fontSize: 20 ,fontWeight:"bold"}} gutterBottom>
              Learn how SIPL is positioned for
                 longer term sustainable growth
            </Typography>
            <Typography sx={{fontSize: 20,marginTop:"30px"}} component="div" color="text.secondary">
            Learn how SIPL is positioned for longer
term sustainable growth
            </Typography>
            <Typography style={{marginTop:"30px"}}>
            <button class="bg-teal-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full mt-12"> 
                            Explore More......</button>
                            </Typography>
          </CardContent>
          
        </>
      )
      
    return(
        <div style={{marginLeft:"20%",marginRight:"20%",marginTop:"50px"}}>
        <div className="upper-div">
        <div className="header2">COMPANY OVERVIEW</div>
        <div className="content">There are a few different types of paragraphs one can write, and we’ll get into that. Just know that no matter what type of paragraph you are writing, the action you are undertaking is called paragraphing.</div>
        </div>
        <div className="main-div">
            <div style={{width:"45%"}}>
            <div className="header">Featured Events</div>
            <Box sx={{ minWidth: 250 }}>
               <Card className="card" style={{borderRadius:"15px" , boxShadow: "rgb(0 0 0 / 40%) 1px 1px 10px 1px",height:"400px",padding:"20px"}}>{card}</Card>
            </Box>

            </div>
            <div style={{width:"45%"}}>
            <div className="header">Latest News</div>
            <Box sx={{ minWidth: 250 }}>
      <Card  className="card"  style={{borderRadius:"15px" , boxShadow: "rgb(0 0 0 / 40%) 1px 1px 10px 1px",height:"400px",padding:"20px"}} >{card1}</Card>
            </Box>
            </div>
        </div>

        <div>
        <Box sx={{ minWidth: 250 }}>
      <Card  className="card"  style={{borderRadius:"15px" , boxShadow: "rgb(0 0 0 / 40%) 1px 1px 10px 1px",marginTop:"40px"}}>
      
     
<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<div style={{display:"inline-block",border:"5px solid green", borderRadius:"50%"}}>

  
  <img style={{borderRadius:"50%",padding:"20px"}} src="data:image/png;base64,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"></img>
    </div>
    
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white" className="header">Current Investor</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Our company has been self funded from the beginning, which highlights our dedication to
providing inventive and unique solution to meet the needs of our costumers </p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
       
       
    </div>
</div>



      </Card>
    </Box>
        </div>

        


        </div>

    )
}

export default CompanyOverview;