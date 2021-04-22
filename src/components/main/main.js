import React,{Component} from 'react';
import './main.css';
import Sidebar from '../sidebar/sidebar';
import Dashboard from '../dashboard/dashboard';


class Main extends React.Component {
    render() {
        return (
            <div className="grandparents " >
                <div className="parents">
                    <div className="childS child1">
                        <Sidebar/>
                    </div>
                    <div className="childS child2">
                        <Dashboard/>
                    </div>
                    {/* <div className="child1">
                        hello
                    </div> */}
                </div>
            </div>
        );
      }
    }
export default Main;
