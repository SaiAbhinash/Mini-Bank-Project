import React,{useState} from 'react'
import './createuser.css'
import  Registeruser from './signup'
import Home from './Home'


function Loginuser(props) {
    const [data,setData] = useState({
        username : '',
        password : '',
    })

    const [user, setUser] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [showRegister, setShowRegister] = useState(false);

    const state = {
        button : 1
    };
    const {username,password,confirmpassword} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        if(state.button === 1){
            if(password === confirmpassword)
            {
                console.log(data);
            }
            else
            {
                console.log("Password Dosen't match");
            }
        }
        if(state.button === 2){
            setShowRegister(true); 
            
        }
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const userId = event.target.username.value;
        const password = event.target.password.value;
        const user = props.list.find((user) => user.userId === userId && user.password === password);
        if (user) {
            setIsLoggedIn(true);
            setUser(user);
          } else {
            alert('Invalid username or password');
          }
      };

      if (!isLoggedIn) {
        return (
        <div>
            <section className='login' id='login'>
                <div className='head'>
                    <h1 className='company'>Banking Application</h1>
                </div>
                <p className='msg'>Welcome back</p>
                <div className='form'>
                    <form onSubmit={handleLogin}>
                        <input type="text" name="username" value={username} placeholder='Username' className='text' id='username' required onChange={changeHandler} /> <br />
                        <input type="password" name="password" value={password} placeholder='Password' className='password' onChange={changeHandler} /> <br />
                        <button className="submit" type="submit"> Login </button>
                        <button onClick={() => (state.button=2)} className="submit" type="submit" > SignUp </button>
                    </form>
                </div>
            </section>
        </div>
        )
        
    }
    return <Home user={user} />;
}

export default Loginuser;