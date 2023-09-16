import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <Link to='/'>
        <p>⇠</p>
        </Link>
        <h1>Login</h1>
        <form>
        <div className="username">
          <img src="https://cdn-icons-png.flaticon.com/128/10628/10628940.png" alt="" />
          <input type="text" placeholder='Username'/>
        </div>
        <div className="password">
          <img src="https://cdn-icons-png.flaticon.com/128/3064/3064155.png" alt="" />
          <input type="password" placeholder='Password'/>
        </div>
        <span>Forgot password?</span>
        </form>
        <button>Login</button>
        <span>or sign in using</span>
        <div className='logos'>
          <Link to='https://www.facebook.com/' target="_blank">
           <img src="https://cdn-icons-png.flaticon.com/128/10096/10096995.png" alt="" />
          </Link>
          <Link to='https://www.google.com/' target="_blank">
           <img src="https://cdn-icons-png.flaticon.com/128/10097/10097024.png" alt="" />
          </Link>
          <Link to='https://github.com/' target="_blank">
           <img src="https://cdn-icons-png.flaticon.com/128/10096/10096702.png" alt="" />
          </Link>
        </div>
        <span>create an account</span>
      </div>
    </div>
  )
}

export default Login