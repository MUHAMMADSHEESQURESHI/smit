import { Route, Routes } from "react-router-dom";
import Account from "./Account";
import Cart from "./Cart";
import Welcome from "./Welcome";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";





const AppRoutes = () => {
return (

<Routes>
<Route path="/" element ={<Welcome/>}/>
<Route path="home" element ={<Home/>}/>
 <Route  path="account" element ={<Account/>}/>
<Route  path="cart" element ={<Cart/>}/> 
<Route path="login" element={<Login/>} />
<Route path="Signip" element ={<SignUp/>}/>
</Routes>


)
}
export default AppRoutes;
