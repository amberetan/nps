import React from "react"

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props
    return(
        <form className="authform" onSubmit={handleSubmit}>
            <input
                className="authinputs"
                name="username"
                value={username}
                placeholder="Username"
                type="text"
                onChange={handleChange}
            
            />
            <input
                className="authinputs"
                name="password"
                value={password}
                placeholder="Password"
                type="text"
                onChange={handleChange}
            
            />
            <button className="login-btn">{btnText}</button>
            <p style={{color: "red"}}>{errMsg}</p>

        </form>
    )
}