import React,{Component} from 'react';
import './sample.css';
import Sidebar from '../sidebar/sidebar';
import Dashboard from '../dashboard/dashboard';


class Sample extends React.Component {
    state={
        menu: false
    }
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
export default Sample;
