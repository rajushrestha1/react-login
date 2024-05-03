import { useState } from "react"

const LoginForm = () => {
    const[userName,setUserName]=useState('');
    const[userPassword,setUserPassword]=useState('');
    const[userEmail,setUserEmail]=useState('');

    const handleForSubmit=(submit)=>{
        submit.preventDefault();
        if(!userName || !userPassword){
            alert('Please fill username and password');
            return;
        }
        console.log(userName,userPassword)
    };
  return (
    <div className="form">
      <h3>Login</h3>
      <form onSubmit={handleForSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input className="user_name"
            type="text"
            id="username"
            value={userName}
            onChange={submit => setUserName(submit.target.value)} 
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input className="user_mail"
             type="email"
            id="email"
            value={userEmail}
            onChange={submit => setUserEmail(submit.target.value)}
             />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input className="user_password" type="password"
            id="password"
            value={userPassword}
            onChange={submit => setUserPassword(submit.target.value)}
             />
        </div>
        
        <button className="submit" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
