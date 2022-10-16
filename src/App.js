import logo from './logo.svg';
import './App.css';
import facebook from './image/facebook.png';
import google from './image/google.png';
import linkedin from './image/linkedin.png';

function App() {
  return(
  <div class="flex-container">

  <div class="left-box">
    <div className='signIn'>
    <h1>Sign in</h1>
    <div className='icons'>
      <div className='child'>
        <img src={facebook} alt='facebook' />
      </div>
      <div className='child'>
      <img src={google} alt='google' />
      </div>
      <div className='child'>
      <img src={linkedin} alt='linkedin' />
      </div>
    </div>
    <br></br>
    <div>
      <input type="text" placeholder='User Email' className='email' />
    </div>
    <br></br>
    <div>
      <input type="password" placeholder='Password' className='password' />
    </div>
    <h4>Forgot your password?</h4>
    <button>SIGN IN</button>
    </div>
  </div>
  
  <div class="right-box">
    <div className='signUp'>
      <h1>Sign UP</h1>
      <p>Sign up here if you don't have account</p>
      <br></br>
      <button>SIGN UP</button>
    </div>
  </div>
  
</div>
  )
}

export default App;
