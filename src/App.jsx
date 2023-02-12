import './App.css';
import AppBar from './components/appBar/AppBar'
import 'bootstrap/dist/css/bootstrap.min.css';
//import MediaCards from './components/mediaCards/MediaCards';
import AppRoutes from './components/AppRoutes';
//import Footer from './components/footer/Footer';
//import Welcome from './components/welcome/Welcome';
//import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
     <AppBar/>
      {/* <Welcome/> */}
      {/* <Login/> */}
      <AppRoutes/>
    
    {/* <MediaCards/> */}
    </div>
  );
}

export default App;
