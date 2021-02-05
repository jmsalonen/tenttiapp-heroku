import { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Question from './Question.js'
import { getProfile, getExam, newExam, deleteExam, updateExam } from '../actions/functions.js'
import { FormattedMessage } from 'react-intl'

const Exam = ({ mytoken, myprofile }) => {
  const { path, url } = useRouteMatch()
  const [token, setToken] = useState(mytoken)
  const [profile, setProfile] = useState(myprofile)
  const [exam, setExam] = useState([])
  const [examId, setExamId] = useState()
  const [refresh, setRefresh] = useState(false)
  const { courseid } = useParams()

  const callNewExam = async () => {
    const callback = result => {
      setRefresh(!refresh)
    }
    newExam(token, profile, courseid, callback)
  }

  const callDeleteExam = async () => {
    const callback = result => {
      setExamId(null)
      setRefresh(!refresh)
    }
    deleteExam(token, examId, callback)
  }

  const callUpdateExam = async (id, value) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    updateExam(token, id, value, callback)
  }

  useEffect(() => {
    const callProfile = () => {
      const callback = result => {
        setProfile(result)
      }
      getProfile(token, callback)
    }
    const callExam = () => {
      const callback = result => {
        setExam(result)
      }
      getExam(token, profile, courseid, callback)
    }

    if (!token)
      setToken(localStorage.getItem('token'))
    else {
      if (!profile) 
        callProfile()  
      if (profile) 
        callExam()
    }
  }, [token, profile, examId, courseid, refresh])

  if (!profile)
    return <></>

  return (
    <div className="Tenttilista">
      <div>
        {exam.length > 0 
          ? exam.map((item, index) =>  
            <Button key={`exambutton${index}`}
              component={Link} 
              to={`${url}/${item.id}`}
              onClick={() => (setExamId(item.id))}
              color="primary">
                {(profile.usertype === 'teacher' && exam.length > 0)
                ? <TextField 
                    defaultValue={item.name}
                    style={ {width: '90%'} }
                    onBlur={ (e) => callUpdateExam(item.id, e.target.value) } 
                  /> 
                : item.name}
            </Button>) 
          : ""}
        {profile.usertype === "teacher" ? <Button onClick={() => {callNewExam()}} color="primary" > + </Button> : ""}
      </div>
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:examid`}> 
        {/* <Route path={`${path}/question`}> */}
          <Question mytoken={token} myprofile={profile} />
        </Route>
      </Switch>
      {(profile.usertype === "teacher" && examId) 
      ? <div className="sulkuNappi">
          <Button component={Link} to={`${url}`} onClick={callDeleteExam} color="secondary" > 
            <FormattedMessage id="exam.remove" /> 
          </Button> 
        </div> 
      : ""}
    </div>
  )
}

export default Exam