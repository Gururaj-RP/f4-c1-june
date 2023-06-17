import React, {useState} from "react";

const Login = () => {

    let [status, setStatus] = useState({error: "", success : ""})
    let [inputvalues, setInputValues] = useState({fullname: "", email : "", password:"", confirm: ""})

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    function confirmPassword(password, confirm){
        return password === confirm
    }

    function handleSubmit(event){
        event.preventDefault()
        let fullname = inputvalues.fullname.trim()
        let email = inputvalues.email.trim()
        let password = inputvalues.password.trim()
        let confirm = inputvalues.confirm.trim()

        if(!fullname || !email || !password || !confirm){
            setStatus({error: "Error: All the fields are mandatory.", success: ""})
        }
        else{
            if(!fullname.includes(" ")){
                setStatus({error: "Error: Enter Full Name.", success: ""})
            }
            else if(!isValidEmail(email)){
                setStatus({error: "Error: Enter Valid Email.", success: ""})
            }
            else if(!confirmPassword(password, confirm)){
                setStatus({error: "Error: Password Mismatch.", success: ""})
            }
            else{
                setStatus({error: "", success: "Successfully Signed Up."})
            }
        }
    }

    return(
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full Name" value={inputvalues.fullname}
                    onChange={(event) => setInputValues({...inputvalues, fullname: event.target.value})}></input>
                <input type="email" placeholder="Email" value={inputvalues.email}
                    onChange={(event) => setInputValues({...inputvalues, email: event.target.value})}></input>
                <input type="password" placeholder="Password" value={inputvalues.password}
                    onChange={(event) => setInputValues({...inputvalues, password: event.target.value})}></input>
                <input type="password" placeholder="Confirm Password" value={inputvalues.confirm}
                    onChange={(event) => setInputValues({...inputvalues, confirm: event.target.value})}></input>
                <div className="error">{status.error}</div>
                <div className="success">{status.success}</div>
                <input type="submit" value={"Signup"}/>
            </form>
    )

}

export default Login