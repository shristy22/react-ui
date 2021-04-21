import React,{Component} from 'react';
import overview from '../../assets/overview.png'
import schedule from '../../assets/schedule.png'
import sales from '../../assets/sales.png'
import administration from '../../assets/administration.png'
import leaderboard from '../../assets/leaderboard.png'
import spreadsheet from '../../assets/spreadsheet.png'
import msg from '../../assets/msg.png'
import phone from '../../assets/phone.png'

import './sidebar.css'
class SideBar extends React.Component {
    render(){
    return(
        <div className="sideBarWidth">
            <div className ="socializer-text">
                 <p>Socializer</p>
            </div>
            <div style={{marginTop:'58px'}}>
                <div className="sub-sidebar">
                <div className="d-flex">
                    <img src={overview} className="img-size"/>
                     <p className="ml-18 fs-14 bold">Overview</p>
                </div>
                <div className="d-flex mt-30">
                    <img src={leaderboard}  className="img-size"/>
                <p className="ml-18 fs-14 bold">Leaderboard</p>
                </div>
                <div className="d-flex mt-30">
                    <img src={spreadsheet}  className="img-size"/>
                <p className="ml-18 fs-14 bold">Spreadsheets</p>
                </div>
                <div className="d-flex mt-30">
                    <img src={administration}  className="img-size"/>
                <p className="ml-18 fs-14 bold">Administration</p>
                </div>
                <div className="d-flex mt-30">
                    <img src={sales}  className="img-size"/>
                <p className="ml-18 fs-14 bold">Sales</p>
                </div>
                <div className="d-flex mt-30">
                    <img src={schedule}  className="img-size"/>
                <p className="ml-18 fs-14 bold">Schedule</p>
                </div>
            
            <div>
                
                     <p className="mt-64 fs-12 bold">TEAMS</p>
                
                <div>
                <div className="d-flex mt-30">
                    <img src={msg}  className="img-size"/>
                     <p className="ml-18 fs-14 bold">Message</p>
                </div>
                <div className="d-flex mt-20">
                    <img src={phone}  className="img-size"/>
                     <p className="ml-18 fs-14 bold">Support</p>
                </div>
                </div>
                
            </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="arrow">
                    <i class="fa fa-long-arrow-up" style={{color:'#3D41D7', fontSize:'30px', padding:'7px'}}></i>
                </div>
            </div>
            <div className="mt-25 upgrade-label" >
                <p>Upgrade to Pro for more resources</p>
                
            </div>
            <div className="mt-25">
                <button className="upgrade-btn">Upgrade</button>
            </div>
            
            </div>
        </div>
    );
    }
}
export default SideBar;