import React,{Component} from 'react';
import './dashboard.css';
import Sidebar from '../sidebar/sidebar';
import logo from '../../assets/logo.png';
import music from '../../assets/music.png';
import shady from '../../assets/shady1.jpeg';
import DonutChart from 'react-donut-chart';
import linechart from '../../assets/linechart.png';
import userprofile from '../../assets/userprofile.png'
import { ChartDonut } from '@patternfly/react-charts';
// import { Doughnut } from 'react-chartjs-2';

// import LineChart from '../linechart';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Dashboard extends React.Component {
    render() {
        return (
            <div className="setSize">
            
              <div class="d-flex" style={{marginLeft: '74px'}}>
                     <div className="mr-auto">
                        <span className="label">Hello Dev, Welcome back!!</span>
                        <p className="dash-body">Your Dashboard is uptdated</p>
                    </div>
                        <div className="icon-size">
                            <i class="fa fa-bell" style={{marginRight: '40px'}}></i>
                            <i class="fa fa-cog" style={{marginRight: '40px'}}></i>
                            
                        </div>
                        <div className="propic" style={{marginRight:'50px'}}>
                                    <img src={userprofile} style={{width: '40px',height:'40px', borderRadius:'50%'}}/>
                            </div>
                </div>

             

              <div className="d-flex justify-content-space-around" style={{flexWrap: 'wrap', marginLeft:'62px'}}>
                  {/* first card */}
                <div className="first child">
                    <div style={{margin: '22px'}}>
                        <img src={logo} alt="Logo" className="first-child-pic" />
                        <div className="d-flex" style={{marginTop: '58px'}}>
                            <div className="mr-auto">
                                <span style={{fontWeight: 600, fontSize: '20px'}}>Latest Updates</span>
                                <p style={{fontSize: '12px'}} className="light-text">FB Industry</p>
                            </div>
                            <div className="plus">
                                 <i class="fa fa-plus-square icon"></i>
                            </div>
                        </div>
                     </div>
                </div>
                {/* second card */}
                <div className="child">
                    <div className="second lightBlue-color border-radius">
                        {/* <LineChart/> */}
                        <img src={linechart} className="linechart" />
                        
                        </div>
                        <div className="d-flex" style={{marginTop: '30px'}}>
                            <div className="lightBlue-color sub-size border-radius">
                                <div style={{textAlign: "center"}}>
                                    <div className=" d-flex justify-content-center circle-play">
                                        <i class="fa fa-play"></i>
                                    </div>
                                    <div style={{marginTop:'15px'}}>
                                    <span style={{fontSize:'17px', fontWeight: "bold"}}>40K</span>
                                    <p className="light-text" style={{fontSize: '12px'}}>Videos Played</p>
                                    </div>
                                 </div>
                            </div>
                            <div className="blue-color sub-size border-radius" style={{marginLeft:'27px'}}>
                                <div style={{textAlign: 'center'}}>
                                <div className=" d-flex justify-content-center" style={{marginTop:'10px'}}>
                                      <img src={music} alt="music" />
                                 </div>
                                 <p className="white-color" style={{fontSize:'17px', fontWeight: "bold"}}>130</p>
                                 <p className="white-color" style={{fontSize: '12px'}}>Scheduled Posts</p>
                                 </div>
                            </div>
                        </div>  
                </div>
                {/* third card */}
                <div className="border-radius third cover child">
                    <div style={{marginLeft: '36px', color:'#ffff',marginTop: '36px'}}>
                        <p style={{fontWeight: '600', fontSize: '26px', width: '179px'}}>What's your plan?</p>
                        <p style={{fontSize:'16px'}}>Looks like a shady day</p>
                        <p style={{fontSize: '48px'}}>36°</p>
                    </div>
                    <div className="plus-icon" style={{backgroundColor:'white', width:'60px',height:'60px' ,float:'right', marginRight:'23px',marginBottom:'17px'}}>
                        <div className="plus-2">
                            <i class="fa fa-plus-square icon"></i>
                        </div>
                    </div>
                </div>
              <div className="border-radius forth child" style={{marginTop:'53px'}}>
                <p style={{fontSize: '24px', fontWeight:'bold'}}>Latest Updates</p>
                <div className="d-flex" style={{marginTop:'19px'}}>
                    <div className="brand  mr-auto">
                        <p className="light-text">Brand additions</p>
                    </div>
                    <p className="light-text" style={{fontSize: '10px',fontWeight: 600, marginTop:'10px'}}>Upcoming tasks</p>
                   
                </div>
                <div style={{marginTop:'34px'}}>
                    <div className="d-flex">
                       <i class="fa fa-twitter-square" style={{fontSize: '60px',color:'#299EE8'}}></i>
                       <div style={{marginLeft: '15px'}}>
                          <span>Twitter</span>
                          <p className="light-text font-10">FB Industry</p>
                       
                       </div>
                       <div className="ml-auto">
                           <p className="green">+987.00 </p>
                       </div>
                      
                    </div>
                    <div className="d-flex" style={{marginTop:'10px'}}>
                    <i class="fa fa-pinterest-square" style={{fontSize: '60px', color:'#D32F2F'}}></i>
                      
                       <div style={{marginLeft: '15px'}}>
                          <span>Pintrest</span>
                          <p className="light-text font-10">FB Industry</p>
                       </div>
                       <div className="ml-auto">
                           <p className="red">+35.00 </p>
                       </div>
                      
                    </div>
                    <div className="d-flex" style={{marginTop:'10px'}}>
                    <i class="fa fa-linkedin-square" style={{fontSize: '60px', color:'#1976D2'}}></i>
                        <div style={{marginLeft: '15px'}}>
                          <span>LinkedIn</span>
                          <p className="light-text font-10">FB Industry</p>
                       </div>
                       <div className="ml-auto">
                           <p className="blue">+126.00 </p>
                       </div>
                    </div>
                </div>
              </div>

               
                  <div style={{textAlign: 'center', marginLeft: '80px',marginTop:'53px'}}>
                    <ChartDonut style={{ height: '230px', width: '230px'}}
                    // ariaDesc="Average number of pets"
                    ariaTitle="posts went viral"
                    constrainToVisibleArea={true}
                    data={[{y: 89 }, { y: 11 }]}
                    labels={({ datum }) => `${datum.y}%`}
                    subTitle="Posts went viral"
                    title="89%"
                    />
                </div>
                <div className="sixth" style={{marginTop:'100px'}}>
                    <div style={{color: '#ffff', textAlign: 'center',marginTop:'76px'}} className="last">
                        <p style={{fontSize:'17px'}}>Great Job, You Saved</p>
                        <p style={{fontWeight: 'bold', fontSize: '57px'}}>270k</p>
                        <p style={{fontWeight: 'bold'}}>PostReach This Year</p>
                    </div>
                </div> 
                     
              </div>  
              
            </div>
        );
      }
    }
export default Dashboard;
