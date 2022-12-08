import React, {useState, useContext } from "react"
import {UserContext} from "../context/UserContext.js"
import AuthForm from "./AuthForm.js"

const initInputs = { username: "", password: ""}

export default function Auth(){
    const [toggle, setToggle] = useState(false)
    const [inputs, setInputs] = useState(initInputs)
    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
      }
    
      function handleSignup(e){
        e.preventDefault()
        signup(inputs)
      }
    
      function handleLogin(e){
        e.preventDefault()
        login(inputs)
      }
      function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
      }
    return(
        <div className="login-page">
            { toggle ? 
            <>
              <div>
                  <AuthForm 
                      handleChange={handleChange}
                      handleSubmit={handleSignup}
                      inputs={inputs}
                      btnText="Signup"
                      errMsg={errMsg}
                  
                  />

              </div>
              <p className="switch-login" onClick={toggleForm}>Already a member? Login.</p>
            </>
            :
            <>
              <div>
                  <AuthForm 
                      handleChange={handleChange}
                      handleSubmit={handleLogin}
                      inputs={inputs}
                      btnText="Login"
                      errMsg={errMsg}
                  />
              </div>
              <p className="switch-login" onClick={toggleForm}>Not a member? Signup.</p>
            </>    
            }
        </div>
    )

}