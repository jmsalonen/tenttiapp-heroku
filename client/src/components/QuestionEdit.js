import { useEffect, useState } from 'react'
import { Button, Card, TextField, Checkbox } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import { FormattedMessage } from 'react-intl'
import { 
  getQuestion, newQuestion, deleteQuestion, 
  updateQuestion, getChoice, addChoice, 
  deleteChoice, updateChoice, updateCorrect
} from '../actions/functions.js'

const QuestionEdit = ({ mytoken, examid }) => {
  const [token, setToken] = useState(mytoken)
  const [question, setQuestion] = useState([]) 
  const [choice, setChoice] = useState([]) 
  const [refresh, setRefresh] = useState(false)

  const callNewQuestion = async () => {
    const callback = result => {
      setRefresh(!refresh)
    }
    newQuestion(token, examid, callback)
  }

  const callDeleteQuestion = async (id) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    deleteQuestion(token, id, callback)
  }

  const callUpdateQuestion = async (id, value) => {
    if (value.length < 1)
      return

    const callback = result => {
      setRefresh(!refresh)
    }
    updateQuestion(token, id, value, callback)
  }

  const callAddChoice = async (id) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    addChoice(token, id, callback)
  }

  const callDeleteChoice = async (id) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    deleteChoice(token, id, callback)
  }

  const callUpdateChoice = async (id, value) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    updateChoice(token, id, value, callback)
  }

  const callUpdateCorrect = async (id, value) => {
    const callback = result => {
      setRefresh(!refresh)
    }
    updateCorrect(token, id, value, callback)
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
      }
      getChoice(token, examid, callback)
    }

    if (!token)
      setToken(localStorage.getItem('token'))
    else {
      callGetQuestion()
      callGetChoice()
    }
  }, [token, refresh, examid])

  return (
    <>
      {question.map((q, index) => 
        <Card className="kortti" key={`${examid}questioncard${index}`}> 
          <div className="sulkuNappi">
            <Button onClick={() => callDeleteQuestion(q.id)} color="secondary" > 
              × 
            </Button>
          </div>
          <TextField 
            label={q.question}
            defaultValue={''}
            style={ {width: '90%'} }
            onBlur={ (e) => callUpdateQuestion(q.id, e.target.value) } 
          />
          {choice.filter(filtered => 
          (filtered.questionid === q.id && filtered.id !== null))
            .map((c, index) => 
            <div key={`choiceboxes${index}`}> 
              <Checkbox
                checked={c.correct}
                style={{ color: green[500] }}
                name={q.question + " " + q.id} 
                onChange={ (e) => callUpdateCorrect(c.id, e.target.checked) } 
              />
              <TextField 
                defaultValue={c.choice}
                style={ {width: '50%'} } 
                onBlur={ (e) => callUpdateChoice(c.id, e.target.value) } 
              />
              <Button onClick={() => callDeleteChoice(c.id)} color="secondary" >
                × 
              </Button>
            </div>
          )}
          <Button onClick={() => callAddChoice(q.id)} color="primary" > 
            + 
          </Button>
        </Card>
      )}
      <Button onClick={callNewQuestion} color="primary" > 
        <FormattedMessage id="question.newquestion" /> 
      </Button>
    </>
  )  
} 

export default QuestionEdit
