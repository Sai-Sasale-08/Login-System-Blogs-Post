import React from 'react';
import { useState } from 'react';
import OTPInput, { ResendOTP } from "otp-input-react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Otp = () => {
  const [OTP, setOTP] = useState("");
  const navigate=useNavigate()
  const handleverify=()=>{
    axios.post("http://localhost:8080/user/verification",{otp:OTP},{withCredentials:true})
    .then((res)=>{
      alert(res.data.message)
      navigate("/login")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",width:"100%"}}>
      
      <div style={{textAlign:"center",margin:"105px 50px"}}>
        <h4>Please Enter Otp To Verify</h4>
      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure /><br /><br />
      <button onClick={handleverify}>VERIFY</button>
      </div>
      
    </div>
  );
}
export default Otp
