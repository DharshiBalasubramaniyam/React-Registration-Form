import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const [errors, setErrors] = useState({});

  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(e) {
    setData(previousState => {
      return {...previousState, [e.target.name]: e.target.value}
    })
    setErrors(previousState => {
      return {...previousState, [e.target.name]: ''}
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateInputs()) {
      setIsSuccess(true);
      setData({ username: '', email: '', password: '', cpassword: '' })
    }
    else {
      setIsSuccess(false);
    }
  }

  function validateInputs() {
    let formErrors = {username: '', email: '', password:'', cpassword:''};
    if (data.username === '') {
      formErrors.username = 'Username is required!';
    }
    if (data.email === '') {
      formErrors.email = 'Email is required!';
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.email)) {
      formErrors.email = 'Invalid email format!';
    }
    if (data.password === '') {
      formErrors.password = 'Password is required!';
    }
    else if (!/^(?=.*\d)(?=.*[A-Za-z])(?=.*[^0-9a-zA-Z]).{8,}$/gm.test(data.password)) {
      formErrors.password = 'Password must contain atleast 8 characters, including at least one letter, number and special character';
    }
    if (data.cpassword === '') {
      formErrors.cpassword = 'Confirm password is required!';
    }
    else if (!/^(?=.*\d)(?=.*[A-Za-z])(?=.*[^0-9a-zA-Z]).{8,}$/gm.test(data.cpassword)) {
      formErrors.cpassword = 'Password must contain atleast 8 characters, including at least one letter, number and special character';
    }
    else if (data.cpassword!==data.password) {
      formErrors.cpassword = 'Confirm password does not match!';
    }
    setErrors(formErrors);

    if (formErrors.username == '' && formErrors.email === '' && formErrors.password === '' && formErrors.cpassword === '') {
      return true;
    }
    return false;

  }


  return (
    <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          (isSuccess) ? <p>Registration was successfully completed!</p> : ''
        }
        
        <div className='input-box'>
          <label>Username</label><br/>
          <input 
            type='text'
            name='username'
            value={data.username}
            onChange={handleChange}
          />
          <small>{errors.username}</small>
        </div>
        
        <div className='input-box'>
          <label>Email</label><br/>
          <input 
            type='text'
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          <small>{errors.email}</small>
        </div>
        
        <div className='input-box'>
          <label>Password</label><br/>
          <input 
            type='password'
            value={data.password}
            name='password'
            onChange={handleChange}
          />
          <small>{errors.password}</small>
        </div>
        
        <div className='input-box'>
          <label>Confirm Password</label><br/>
          <input 
            type='password'
            value={data.cpassword}
            name='cpassword'
            onChange={handleChange}
          />
          <small>{errors.cpassword}</small>
        </div>
        
        <div className='input-box'>
          <input type='submit' value='Register'/>
        </div>
        <br/><div className='msg'>By clicking Register, you are agree to our user agreement, privacy policy, and cookie policy.</div>
        <br/><div className='msg'>Already a member? <a href='#'>Login Here</a></div>
      </form>
  );
}

export default App;
