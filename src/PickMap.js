import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleMap } from '@react-google-maps/api';
import './PickMap.css'
import Razorpay from 'razorpay'
import $ from 'jquery'
import { getDatabase, ref, set, onValue} from "firebase/database";
import Display from './Display';
 
window.veh_type="0";
class PickMap extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
           address: '' ,
            showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
  
        mapCenter: {
          lat: 20.593683,
          lng: 78.962883
        }
      }
    }
      
    render() {
        return (
           <div>
                <div className="pickup">
                  <input type= "text" id="Pickup_pickup" className="pick"  placeholder="Pickup"></input>
                  <input type= "text" id="Pickup_dropoff" className="drop" placeholder="Drop"></input>
                  <button id="pick_button" className="pbutton" onClick={PickContinue}>CONTINUE</button>
                </div>

                <div className="head" id="head">
                  <span id="head_pick" className="pick_head"></span>
                  <span id ="head_drop" className="drop_head"></span>

                
                <div className="Vehicles">
                 <button id="vehicle_1" className="vehicle_1" onClick={veh_1}>VEHICLE 1</button>
                 <button id="vehicle_2" className="vehicle_2" onClick={veh_2}>VEHICLE 2</button>
                 <button id="vehicle_3" className="vehicle_3" onClick={veh_3}>VEHICLE 3</button>
                 <button id="vehicle_4" className="vehicle_4" onClick={veh_4}>VEHICLE 4</button>
                 <button id="vehicle_5" className="vehicle_5" onClick={veh_5}>VEHICLE 5</button>
      
                </div>
                <button id="pick_pay" className="pay" onClick={paynow} > PAY NOW</button>
                <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
                </div>
              <div>
                <Map className="Map"
          google={this.props.google}
          //</div>onClick={this.onMapClicked}
           initialCenter= {{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
           }}
           center= {{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
           }}
           >
        <Marker 
                //onClick={this.onMarkerClick}
                //name={'Current location'} 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}    
                
                />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
      </div>
        )
    }
    
}

function veh_1()
{
  window.veh_type="1";
}
  
function veh_2()
{
   window.veh_type="2";
}
  
function veh_3()
{
  window.veh_type="3";
}
  
function veh_4()
{
  window.veh_type="4";
}
  
function veh_5()
{
   window.veh_type="5";
}
  
function paynow()
{
  //console.log(window.veh_type);
 var price;
 if(window.veh_type == "1")
  price="25000";
  else if(window.veh_type == "2")
  price="45000";
  else if(window.veh_type == "3")
  price="65000";
  else if(window.veh_type == "4")
  price="85000";
  else if(window.veh_type == "5")
  price="150000";
   //console.log(price);
   var pickup_location = document.getElementById("Pickup_pickup").value;
   var drop_location = document.getElementById("Pickup_dropoff").value;

// const script=document.createElement('script')
// script.src="https://checkout.razorpay.com/v1/checkout.js"
// document.body.appendChild(script)
//  const data = await fetch('http://localhost:3000/pickup', {method: 'POST' }).then((t) =>
//  t.json()
//  )
  
//  console.log(data)
$.ajax({
url: "3001/create-order-id",
type: "GET",
error: err => {
    console.log(err)
},
success: res => {
    console.log(price)
    var options = {
        "key": "rzp_test_AwcPc39fStegOy",
        "amount": price,
        "currency": "INR",
        "name": "test",
        "description": "Test Transaction",
         "order_id": res.id,
        "handler": function (response){
          const db = getDatabase();
          const dbref = ref(db,'users');
          onValue(dbref,(snapshot) => {
            var count = snapshot.size;
            count++;
            set(ref(db, 'users/' + count), {
              'pick': pickup_location,
              'drop': drop_location,
              'price': price,
              'vehicle_selected': window.veh_type,
               'status': 'Seaching Drivers'
            });
          window.location='/Display'
            console.log("data available")
          },
          {
            onlyOnce:true
          }
          )
          
          

        },
        "prefill": {
            "name": "monica",
            "email": "gadalaymon@gmail.com",
            "contact": +919557896541
        },
        theme: {
            color: "#0D9B61"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            // alert(response.error.code);
            alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
    });
    rzp1.open();
},
data: {
    amount: price,
    currency: "INR"
}
});
}


function PickContinue()
{
   var pickup_location = document.getElementById("Pickup_pickup").value;
   var drop_location = document.getElementById("Pickup_dropoff").value;
   document.getElementById("head").style.visibility="visible";
   document.getElementById("head_pick").innerHTML=pickup_location;
   document.getElementById("head_drop").innerHTML=drop_location;
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDQlNx7PFUYWIFnvcBBXrJCFKx6fqUUlIA")
  })(PickMap)
