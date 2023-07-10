
import Login from './pages/login.js'
import Navbar from './components/Navbar.jsx'
import Spline from '@splinetool/react-spline'
import './App.css'

function App() {
  return (
    <div className='div_container_main'>
      <div className='div_logo'>
        <Spline scene="https://prod.spline.design/xa4KvTiIROvmBkEb/scene.splinecode" /> 
      </div>
      <div className='div_login'>
        <Login />
      </div>
    </div>
  );
}

export default App;
