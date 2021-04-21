import React,{Component} from 'react';
import './main.css';
import Sidebar from '../sidebar/sidebar';
import Dashboard from '../dashboard/dashboard';

class Main extends React.Component {
    render() {
        return (
            <div className="main" >
                <div>
                    <Sidebar/>
                </div>
                <div>
                     <Dashboard/>
                </div>
            </div>
        );
      }
    }
export default Main;
