import Logo from '../assests/logo.png.jpg'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Welcome(){
    const navigate = useNavigate()
    const myfunction = () => {
        navigate("/login")
    }
return(
    <div className ='Container main m-6 bg = light'>
   <img className='m-5' src={Logo}  alt="" />
    <div>
        <h3 className='m-5'>SAYLANI DISCOUNT STORE</h3>
        <button className='btn btn-success my-3 w-40 '  onClick={myfunction}>Get Started</button>
    </div>

    </div>

)
} 
export default Welcome;