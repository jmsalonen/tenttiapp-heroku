import { useState } from 'react'
import { Button, TextField, Card } from '@material-ui/core'
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl'
import { register } from '../actions/functions.js'

const usertypes = [
  {
    value: 'student',
    label: 'student'
  },
  {
    value: 'teacher',
    label: 'teacher'
  }  
]

const Register = () => {
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userPassword, setUserPassword] = useState()
  const [userType, setUserType] = useState('student')

  return (
    <div className="Tenttilista">
      <Card className="kortti">
        <ul>
        <div style={{ margin: '10px' }}>
          <h4> <FormattedMessage id="register.register" /> </h4>
        </div>
        <div style={{ margin: '10px' }}>
          <TextField 
            label={'name'} 
            variant={"outlined"} 
            onChange={(e) => setUserName(e.target.value)} 
          />
        </div>
        <div style={{ margin: '10px' }}>
          <TextField 
            label={'email'} 
            variant={"outlined"} 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        </div>
        <div style={{ margin: '10px' }}>
          <TextField 
            label={'password'} 
            variant={"outlined"} 
            type={'password'} 
            onChange={(e) => setUserPassword(e.target.value)} 
          /> 
        </div>
        <div style={{ margin: '10px' }}>
          <TextField 
            select
            label={'usertype'} 
            variant={"outlined"} 
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            SelectProps={{ native: true }}
          >
              {usertypes.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </TextField>
          <br /> 
        </div>
        <div style={{ margin: '10px' }}>
          <Button 
            component={Link} to="/" 
            color="primary" 
            variant="contained"
            onClick={() => register(userName, userEmail, userPassword, userType)}
          >  
            <FormattedMessage id="question.finished" /> 
          </Button>
        </div>
        </ul>
      </Card>
    </div>
  )
}

export default Register
