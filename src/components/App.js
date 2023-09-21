import './App.css';

function App() {
  return (
    <form>
        <div className='input-box'>
          <label>Username</label>
          <input type='text'/>
        </div>
        <div className='input-box'>
          <label>Email</label>
          <input type='email'/>
        </div>
        <div className='input-box'>
          <label>Password</label>
          <input type='password'/>
        </div>
        <div className='input-box'>
          <label>Confirm Password</label>
          <input type='password'/>
        </div>
        <div className='input-box'>
          <input type='submit' value='Register'/>
        </div>
        <div>By clicking Register, you are agree to our user agreement, privacy policy, and cookie policy.</div>
        <div>Already a member? <a href='#'>Login Here</a></div>
      </form>
  );
}

export default App;
