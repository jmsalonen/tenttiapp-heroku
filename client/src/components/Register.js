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
        <div>
          <TextField 
            label={'name'} 
            onChange={(e) => setUserName(e.target.value)} 
          />
        </div>
        <div>
          <TextField 
            label={'email'} 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        </div>
        <div>
          <TextField 
            label={'password'} 
            type={'password'} 
            onChange={(e) => setUserPassword(e.target.value)} 
          /> 
        </div>
        <div>
          <TextField 
            select
            label={'usertype'} 
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
        <div>
          <Button 
            component={Link} to="/" 
            onClick={() => register(userName, userEmail, userPassword, userType)}
          >  
            <FormattedMessage id="register.register" /> 
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default Register
