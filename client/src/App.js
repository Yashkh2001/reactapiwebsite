import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './App.css';
import { IconButton,Button } from '@material-ui/core';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';
import ChatIcon from '@material-ui/icons/Chat';
import { Slider } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';



const App=()=>{

const useEventSource = (url) => {
    const [data, updateData] = useState(null);

    useEffect(() => {
        const source = new EventSource(url);

        source.onmessage = function logEvents(event) {      
            updateData(JSON.parse(event.data));     
        }
    }, [])

    return data;
}
const data = useEventSource('http://localhost:5000/stream-random-numbers');
  if (!data) {
    return <div />;
  }

  return( 
    <div style={{display:"flex"}}>
        <div className="drawer">
           <IconButton> <AccountTreeIcon style={{color:"grey"}}/></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"1vh"}}> <PersonAddDisabledIcon/></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"3vh"}}> <StarBorderIcon /></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"5vh"}}> <BarChartIcon /></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"7vh"}}> <HomeIcon /></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"9vh"}}> <RecentActorsIcon /></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"11vh"}}><ReceiptIcon /></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"13vh"}}> <SettingsIcon /></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"15vh"}}> <HeadsetIcon /></IconButton>
           <IconButton style={{color:"grey",position:"relative",top:"17vh"}}> <ChatIcon /></IconButton>
           
        </div>
        <div className="container">
          <div className="nav">
              <div className="logo"><h1 className="manage">Manage Users</h1></div>
              <div className="buttons">
                  <Button size="large" variant="outlined" style={{backgroundColor:"white",textTransform:"none"}}>User Creation</Button>
                  <Button size="large" variant="outlined" style={{backgroundColor:"orange",textTransform:"none",color:"white",position:"relative",left:"0.3vw"}}>Manage Users</Button>
              </div>
              <div className="links">
                <a style={{color:"grey"}} href="">Dashboard&gt; </a>
                <a style={{color:"black"}} href="">Manage Users</a>
                
              </div>
          </div>
          <div className="block">
            <div className="block-title">
              <h3 style={{position:"relative",right:"2vw"}}>Username</h3>
              <h3>Chat History</h3>
              <h3>Block</h3>
              <h3>Hide</h3>
              <h3>Action</h3>

            </div>
             
          {data.map((name)=>(
             <div className="block-content">
             <h3 className="name" style={{position:"relative",fontWeight:"normal"}}>{name.name}</h3>
            <div className="chat"><p>Chat History</p></div>
             <div className="blocktext"><Slider style={{color:"orange",width:"2vw"}} aria-labelledby="continuous-slider" /></div>
             <div className="hide"><Slider style={{color:"orange",width:"2vw"}} aria-labelledby="continuous-slider" /></div>
             <div className="action">
             <IconButton><VisibilityIcon style={{color:"black"}}/></IconButton>
             <IconButton><DeleteIcon style={{color:"red"}}/></IconButton>
             
             </div>
            </div>
            
          ))}
           </div>
           <div className="pagination">
             <p style={{position:"relative",left:"2vw",bottom:"1vh"}}>Showing 1 to 100 entries</p>
              <div className="buttons2">
                <button style={{backgroundColor:"orange",height:"6vh",color:"white",width:"3vw"}}>1</button>
                <button style={{backgroundColor:"orange",width:"3vw",color:"white",height:"6vh",width:"3vw"}}>2</button>
                <button style={{backgroundColor:"orange",width:"1px",color:"white",height:"6vh",width:"3vw"}}>3</button>
                <button style={{backgroundColor:"orange",width:"1px",color:"white",height:"6vh",width:"3vw"}}>4</button>
                <button style={{backgroundColor:"orange",width:"1px",color:"white",height:"6vh",width:"3vw"}}>5</button>
                <button style={{backgroundColor:"orange",width:"1px",color:"white",height:"6vh",width:"3vw"}}>&gt;</button>

              </div>
           </div>
           
         
        </div>
         
  </div>)


}

export default App;