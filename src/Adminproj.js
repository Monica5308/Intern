import React from 'react'

function Adminproj() {
    return (
        <div>
            <div className="Admin" >
            <span id="pickup_admin" className="ADMIN_pickup" > Pickup</span>
            <span id="drop_admin" className="Admin_drop"> Drop</span>
            <div className="vehicle_admin" >
                <span id="admin_vehicle" className="admin_vehicle"> Select vehicle </span>
                <span id="admin_price" className="admin_price"> Order price</span>
            </div>
            </div>
        </div>
    )
}

export default Adminproj
