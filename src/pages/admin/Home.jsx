import React from 'react'
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';

export default function Home() {
  return (
    <div>Home
<TextField
        label="Email"
        variant="outlined"
        type="email"
     
        size="small"
        required
        helperText="Enter your email address"
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        // fullWidth
        size="small"
        required
        helperText="Enter your password"
      />
      <p>1</p>
      <p>1</p>
      
    </div>
  )
}
