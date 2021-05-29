import React,{useState} from 'react';
import './Info.css';
import QrReader from 'react-qr-scanner'

const Info = (props) => {
    const[delay, setDelay] = useState(200);
    const[result, setResult] = useState('No result');
    const[openCam, setOpenCam] = useState(false);
    const[isResult, setIsResult] = useState(false);

        const handleScan = (data) =>{
            if(data){
            // console.log(data);
                setResult(data);
                setIsResult(true);
            }
                else{
                    setIsResult(false);
                    // console.log(data);
                setResult('no data')
                }
            }
        const handleError = (err) =>{
                console.error(err);
            }
            // const previewStyle = {
            //     height: 240,
            //     width: 320,
            // }
        const openCamera = () => {
            setOpenCam(!openCam)
        }   
    return(
        <>
                {openCam ?
                
                    <QrReader
                    delay={delay}
                    style={{width:'100%'}}
                    onError={handleError}
                    onScan={handleScan}
                    />
                    // <h1>{result.text}</h1>
                // </div>
                : ''}
           
        <div className="card-style">
                <div className="d-flex">
                    <div>
                        <div className="d-flex">
                            <p className="header">Order Id -</p>
                            <p style={{color:'rgba(100,102,141,255)'}}>{props.oId}</p>
                        </div>

                        <div className="d-flex">
                            <p className="header">Order Details -</p>
                            <p style={{color:'rgba(100,102,141,255)'}}>{props.orderDetails}</p>                                 
                        </div>
                    </div>
                <div className="ml-auto">
                    <p className="scanCode">Scan Code</p>
                    <i class="fa fa-camera blue-color1 ml-3" onClick={openCamera}></i>
                    {isResult===false ? result.text : 'not verified' }
                </div>     
             </div> 
      </div> 
      </> 
    );
}
export default Info;