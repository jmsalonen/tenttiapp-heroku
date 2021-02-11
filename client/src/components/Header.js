import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom"
import { FormattedMessage } from 'react-intl'

const Header = ({ token, logOut, changeLanguage }) => (
  <AppBar position="fixed">
      <Toolbar>
        <div style={{ flex: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: 'none' }}> 
            { token ? <FormattedMessage id="header.home" /> : <FormattedMessage id="header.login" /> }
          </Link> 
          <Button onClick={changeLanguage} style={{ color: "white" }}> 
            <FormattedMessage id="header.language" />
          </Button>
          {token ? <Link to="/courses" style={{ color: "white", textDecoration: 'none' }}> 
            <FormattedMessage id="header.courses" /> 
          </Link> : "" }
        </div>
        {token ? "" : <Link to="/register" style={{ color: "white", textDecoration: 'none' }}> 
          <FormattedMessage id="header.register" /> 
        </Link> }
        {token ? <Link to="/" style={{ color: "white", textDecoration: 'none' }} onClick={logOut} > 
          <FormattedMessage id="header.logout" /> 
        </Link> : "" } 
    </Toolbar>
  </AppBar>
)

export default Header
