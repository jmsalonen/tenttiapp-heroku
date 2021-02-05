import { useEffect, useState } from "react"
import { Button, TextField, Card } from '@material-ui/core'
import { Link, Redirect } from "react-router-dom";
import { FormattedMessage } from 'react-intl'
import { logIn } from '../actions/functions.js'

const LogIn = ({ logIn }) => {
  const [userEmail, setUserEmail] = useState()
  const [userPassword, setUserPassword] = useState()

  return (
    <div className="Tenttilista">
      <Card className="kortti">
        <div>
          <TextField label={'email'} onChange={(e) => setUserEmail(e.target.value)} />
        </div>
        <div>
          <TextField label={'password'} type={'password'} onChange={(e) => setUserPassword(e.target.value)} /> 
        </div>
        <div>
          <Button onClick={() => logIn(userEmail, userPassword)}> <FormattedMessage id="login.login" /> </Button>
        </div>
      </Card>
    </div>
  )
}

export default LogIn
