import { useState } from 'react';
import "./Form.css"

function Form() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorUsename, setErrorUsername] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [userColor, setUserColor] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [passwordColor, setPasswordColor] = useState("");
    const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

    const validate = e => {
        e.preventDefault();

        if(username.length > 8){
            setErrorUsername("");
            setUserColor('green');
        }else{
            setErrorUsername("username must be 8 letters long");
            setUserColor("red");
        };

        if(email.includes("@gmail.com")){
            setErrorEmail("");
            setEmailColor("green");
        }else{
            setErrorEmail("email should have ( @gmail.com )");
            setEmailColor("red");
        };

        if(password.length > 8){
            setErrorPassword("");
            setPasswordColor("green");
        }else{
            setErrorPassword("password should be 8 letters long");
            setPasswordColor("red");
        };

        if(password !== "" && password === confirmPassword){
            setErrorConfirmPassword("");
            setConfirmPasswordColor("green");
        }else{
            setErrorConfirmPassword("passwords didn't match");
            setConfirmPasswordColor("red");
        };
    };


  return (
    <>
        <div className='card'>
            <div className='card-image'></div>

            <form >
                <input type="text" className='border-2'
                    placeholder='name'
                    style={{borderColor: userColor}}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <p className='error'>{errorUsename}</p>


                <input type="email" className='border-2'
                    placeholder='email'
                    style={{borderColor: emailColor}}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <p className='error'>{errorEmail}</p>

                
                <input type="password" className='border-2'
                    placeholder='password'
                    style={{borderColor:passwordColor}}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p className='error'>{errorPassword}</p>


                <input type="password" className='border-2'
                    placeholder='confirm password'
                    style={{borderColor: confirmPasswordColor}}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <p className='error'>{errorConfirmPassword}</p>

                <button className='border-2' onClick={validate}>submit</button>

            </form>
        </div>
    </>
  );
};

export default Form;