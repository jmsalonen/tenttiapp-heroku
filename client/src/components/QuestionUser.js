import { useEffect, useState } from 'react'
import { Button, Card, Checkbox } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { FormattedMessage } from 'react-intl'
import { 
  getQuestion,
  getStudentChoice,
  updateAnswer,
  updateFinished
} from '../actions/functions.js'

const QuestionUser = ({ mytoken, examid, userid }) => {
  const [token, setToken] = useState(mytoken)

  const [question, setQuestion] = useState([]) 
  const [choice, setChoice] = useState([]) 
  const [finished, setFinished] = useState(false)
  const [refresh, setRefresh] = useState(false)

  const callUpdateAnswer = async (id, value) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    updateAnswer(token, examid, userid, id, value, callback)
  }

  const callUpdateFinished = async () => {
    const callback = result => {
      setRefresh(!refresh)
    }
    updateFinished(token, examid, userid, callback)
  }

  useEffect(() => {
    const callGetQuestion = () => {
      const callback = result => {
        setQuestion(result)
      }
      getQuestion(token, examid, callback)
    }
    const callGetChoice = () => {
      const callback = result => {
        setChoice(result)
        setFinished(result[0].finished)
      }
      getStudentChoice(token, userid, examid, callback)
    }

    if (!token)
      setToken(localStorage.getItem('token'))
    else {
      callGetQuestion()
      callGetChoice()
    }
  }, [token, userid, refresh, examid])

  return (
    <div>
      {question.map((q, index) => 
        <Card className="kortti" key={`questioncard${index}`}> 
          <div>
            {q.question}
            {/* // if finished then checkicon else blockicon */}
          </div>
          {choice.filter(filtered => 
          (filtered.questionid === q.id && filtered.choiceid !== null))
            .map((c, index) => 
            <div key={`checkboxdivi${index}`}>
              <Checkbox
                checked={c.answer}
                disabled={ finished }
                onChange={ (e) => callUpdateAnswer(c.choiceid, e.target.checked) } 
              />
              {finished 
              ? <Checkbox 
                  style={{ color: green[500] }}
                  checked={c.correct}
                /> 
              : ""}
              <label>{c.name}</label>
            </div>
          )}
        </Card>
      )}
      <div>
        <Button 
          onClick={callUpdateFinished} 
          variant="contained" 
          color="primary" 
        > 
          <FormattedMessage id="question.finished" /> 
        </Button>
      </div>
    </div>
  )
}

export default QuestionUser
