import React, { Component } from 'react'
import './Display.css'
import { getDatabase, ref, onValue } from 'firebase/database';

export default class Display extends Component {
    
    componentDidMount()
    {
        window.addEventListener('load', this.Display_details);
    }
   
    componentWillUnmount() { 
      window.removeEventListener('load', this.Display_details)  
    }

    Display_details()
    {
        console.log("working")
         const db=getDatabase();
         const dbref1=ref(db,'users/');
         onValue(dbref1,(snapshot)=>{
             var count=snapshot.size
            const dbref=ref(db,'users/' + count);
        
            onValue(dbref,(snapshot) => {
                const pick = snapshot.val().pick;
               const drop = snapshot.val().drop;
               const price = snapshot.val().price;
               const select = snapshot.val().vehicle_selected;
               const status = snapshot.val().status;
   
               document.getElementById("pickup_order").innerHTML='Pickup location: ' + pick;
               document.getElementById("drop_order").innerHTML='Drop location: ' +drop;
               document.getElementById("vehicle").innerHTML='Selected vehicle :  vehicle ' + select;
               document.getElementById("price").innerHTML= 'Total price: ' + price + '/-';
               document.getElementById("status").innerHTML = "Status: " + status 
         })
         
         })
    
        }
   


    render() {
        return (
            <div>
                <div className="Order" >
            <span id="pickup_order" className="Order_pickup" > Pickup</span>
            <span id="drop_order" className="Order_drop"> Drop</span>
            <div className="vehicle_order" >
                <span id="vehicle" className="select_vehicle"> Select vehicle </span>
                <span id="price" className="order_price"> Order price</span>
            </div>
            <span id="status" className="status" > Status</span>
            </div>

            </div>
        )
    }
}
    
