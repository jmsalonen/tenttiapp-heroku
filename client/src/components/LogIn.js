import { useState } from "react"
import { Button, TextField, Card } from '@material-ui/core'
import { FormattedMessage } from 'react-intl'

const LogIn = ({ logIn }) => {
  const [userEmail, setUserEmail] = useState()
  const [userPassword, setUserPassword] = useState()

  return (
    <div className="Tenttilista" >
      <Card className="kortti" >
        <ul>
        <div style={{ margin: '10px' }}>
          <h4> <FormattedMessage id="header.login" /> </h4>
        </div>
        <div style={{ margin: '10px' }}>
          <TextField 
            variant={"outlined"} 
            label={'email'} 
            onChange={(e) => setUserEmail(e.target.value)} 
          />
        </div>
        <div style={{ margin: '10px' }}>
          <TextField 
            variant={"outlined"} 
            label={'password'} 
            type={'password'} 
            onChange={(e) => setUserPassword(e.target.value)} 
          /> 
        </div>
        <div style={{ margin: '10px' }}>
          <Button 
            color="primary" 
            variant="contained"
            onClick={() => logIn(userEmail, userPassword)}
          > 
            <FormattedMessage id="login.login" /> 
          </Button>
        </div>
        </ul>
      </Card>
    </div>
  )
}

export default LogIn
