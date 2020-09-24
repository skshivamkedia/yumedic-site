import React from 'react'
import '../App.css'

const FailedPage = () => {

    return ( <
        div className = "text-center" >
        <
        h2 > Your Booking Failed < /h2>  <
        h3 > YuMedic < /h3> <
        p className = "m-1" > Wishes You and Your Family Good Health < /p> <
        p className = "m-1" > Get Well Soon! < /p> <
        div className = "d-flex justify-content-center" >
        <
        img src = "https://i.ibb.co/hFJnBtL/download.jpg"
        style = {
            { height: "100px", margin: "10px", marginRight: "50px" }
        }
        /> <
        img src = "https://i.ibb.co/hFJnBtL/download.jpg"
        style = {
            { height: "100px", margin: "10px", marginLeft: "50px" }
        }
        /> < /
        div > <
        button className = "border rounded m-3 anotherAppointment" > Try Again < /button> < /
        div >
    )

}

export default FailedPage