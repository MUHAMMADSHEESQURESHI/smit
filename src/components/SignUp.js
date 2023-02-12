import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Login from './Login';
 const SignUp = () => {
  return (
    <div className='main' style={{overflow:'hidden'}}>
      <div>
        <h1 className='saylani display-6 fw-bold '  >SAYLANI WELFARE</h1>
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
<TextField id="standard-basic" label="Full Name" variant="standard" />
<br/>
<TextField id="standard-basic" label="Address" variant="standard" />
<br/>
  <TextField id="standard-basic" label="Email" variant="standard" />
  <br />
  <TextField id="standard-basic" label="Password" variant="standard" />
</Box>
</div>
<button className='btn btn-success btn-lg fw-bold my-5'>SignIn</button>
<p className='text-primary fw-bold'>Don't have an account? Register</p>
</div>
</div>
)
}


export default SignUp;