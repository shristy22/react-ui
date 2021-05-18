import React from 'react';
import './Info.css';
import Info from './Info';

const ordersObj = [
    {
        order_id: '1',
        order_details:'shristy'
    },
    {
        order_id: '2',
        order_details:'abhsiehk'
    },
    {
        order_id: '3',
        order_details:'queen'
    },
    {
        order_id: '4',
        order_details:'universe'
    }
];

const Orders = (props) => {
    return(
        // ordersObj.map((item, index)=>{
        //      <div>{item.name}</div>
        // })
        <div>
           {ordersObj.map((e)=>{
             return (
                 <Info orderDetails={e.order_details} oId={e.order_id}/>
             );})}
        </div>
    );
}
export default Orders;