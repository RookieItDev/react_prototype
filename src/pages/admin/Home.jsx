import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Select, MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';

// Card
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
// End

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans Thai',
      'sans-serif'
    ].join(','), // Replace 'Font Name' with the actual font name
  },
});

export default function Home() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>Home
      <div >
      <ThemeProvider theme={theme}>
      <TextField
        variant="outlined"
        type="email"
        size="small"
        required
        helperText="Enter your email address"
      />
      <TextField
        // label="Password"
        variant="outlined"
        type="email"
        // fullWidth
        size="small"
        required
        helperText="Enter your password"
      />
   
      <div>
      <Select value={selectedValue} size="small" style={{width:300}}
      onChange={handleChange}>
        <MenuItem theme={theme}  value="">--กรุณาเลือก--</MenuItem>
        <MenuItem value="option1">เมนูที่ 1</MenuItem>
        <MenuItem value="option2">เมนูที่ 2</MenuItem>
        <MenuItem value="option3">เมนูที่ 3</MenuItem>
        <MenuItem value="option4">เมนูที่ 4</MenuItem>
      </Select>
      </div>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="ชาย" />
        <FormControlLabel value="male" control={<Radio />} label="หญิง" />
        <FormControlLabel value="other" control={<Radio />} label="อื่นๆ" />
      </RadioGroup>
    </FormControl>
    {/*  Button */}
    <Stack spacing={2} direction="row">
      <Button variant="text">ข้อมูล</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    {/* ButtonGroup */}
    <br />
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>สอง</Button>
      <Button>Three</Button>
    </ButtonGroup>
    {/* CheckBox */}
    <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
      <br /><br />
      {/* Card */}

      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      {/* <InputLabel>FirstName</InputLabel>
       <TextField size="small"  variant="outlined" type="email"></TextField> */}
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Controlled"
        value={name}
        size="small"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label="FirstName"
        size="small"
        defaultValue="foo"
      />
       <TextField
        id="outlined-uncontrolled"
        label="LastName"
        size="small"
        defaultValue="foo"
      />
       <TextField
        id="outlined-uncontrolled"
        label="Address"
        size="small"
        defaultValue="foo"
      />
     <Button style={{width:10,backgroundColor:'LightSlateGrey',color:'white'}} variant="contained">Submit</Button>
    </Box>
    
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </ThemeProvider>
    </div>

      <p>ทดสอบฟอร์น</p>
      <p>ระบบอนุมัติราคาไม้โรงไฟฟ้ายะลาและจะนะกรีน</p>
      
    </div>
  )
}
