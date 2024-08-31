import React,{useState} from 'react'
import './signup.css'


function Registeruser() {
    const [data,setData] = useState({
        username : '',
        password : '',
        // mobileno : '',
        confirmpassword : '',
    })
    const {username,password,confirmpassword} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        if(password === confirmpassword)
        {
            console.log(data);
        }
        else
        {
            console.log("Password Dosen't match");
        }        
    }
  return (
    <div>
        <section className='login' id='login'>
            <div className='head'>
                <h1 className='company'>Banking Application</h1>
            </div>
            <p className='msg'>Welcome back</p>
            <div className='form'>
                <form onClick={submitHandler}>
                    <input type="text" name="username" value={username} placeholder='Username' className='text' id='username' required onChange={changeHandler} /> <br />
                    <input type="password" name="password" value={password} placeholder='••••••••••••••' className='password' onChange={changeHandler} /> <br />
                    <input type="password" name="confirmpassword" value={confirmpassword} placeholder='••••••••••••••' className='password' onChange={changeHandler} /> <br />
                    <button className="submit" type="submit" > Register </button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Registeruser;
