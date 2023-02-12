import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SignUP from './SignUp';




const Login = () => {






  return (
    <div className='main' style={{ overflow: 'hidden' }}>
      <div>
        <h1 className='saylani display-6 fw-bold' >SAYLANI WELFARE</h1>
        <h6 className='text-primary mb-5'>ONLINE DISCOUNT STORE</h6>
        <div className='mt-5'>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} value={email} />
          </Box>
        </div>
        <button className='btn btn-success btn-lg fw-bold my-5' onClick={loginUser}>SignIn</button>
        <p className='text-primary fw-bold'><Link to={"SignUp"} >Don't have an account? Register</Link></p>
      </div>
    </div>
  )
}


export default Login;