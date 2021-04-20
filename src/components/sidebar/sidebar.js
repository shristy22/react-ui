import React,{Component} from 'react';
import './sidebar.css'
class SideBar extends React.Component {
    render(){
    return(
        <div className="sideBarWidth">
            <div>
                 <p>Socializer</p>
            </div>
            <div>
                <p>Overview</p>
                <p>Leaderboard</p>
                <p>Spreadsheets</p>
                <p>Administration</p>
                <p>Sales</p>
                <p>Schedule</p>
            </div>
            <div>
                <div>
                     <p>Teams</p>
                </div>
                <div>
                    <p>Message</p>
                    <p>Support</p>
                </div>
                
            </div>
            <div>
                <p>Upgrade to Pro for more resources</p>
                <button>Upgrade</button>
            </div>
        </div>
    );
    }
}
export default SideBar;