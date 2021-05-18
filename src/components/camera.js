


import React, {useEffect,useState, Component} from 'react'
import QrReader from 'react-qr-scanner'

 
const Camera = () => {
    const[delay, setDelay] = useState(500);
    const[result, setResult] = useState('No result');
    const[openCam, setOpenCam] = useState(false);

  const handleScan = (data) =>{
      if(data){
      console.log(data);
        setResult(data);
      }
        else{
            console.log(data);
        setResult('no data')
        }
      }
  const handleError = (err) =>{
        console.error(err);
      }
    const previewStyle = {
        height: 240,
        width: 320,
      }
   const openCamera = () => {
    setOpenCam(!openCam)
   }   
return(
    <>
    <button onClick={openCamera}>click to scan</button>
    {openCam ?
    <div>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          />
        <h1>{result.text}</h1>
      </div>
    : ''}
   </>
);
}
export default Camera;