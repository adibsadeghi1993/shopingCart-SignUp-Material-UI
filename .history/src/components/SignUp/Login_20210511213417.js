import {React,useState} from 'react';

import LoginForm from "./LoginForm"
import SmsValidation from "./SmsValidation"

const Login = () => {
    const [isSubmited,setIsSubmited]=useState(false)
    console.log(isSubmited)
    const [phone,setPhone]=useState("")
    

    return ( 
     <>
          {isSubmited ? <SmsValidation phone={phone}/> : <LoginForm setPhone={setPhone} setIsSubmited={setIsSubmited}/>}
     </>
     );
}
 
export default Login;