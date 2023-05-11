import { useState } from 'react'
import './App.css'

const Satisfaction = ({handleClick,op}) =>{

  return(
    <button onClick={handleClick}> {op} </button>
  )

}

const Display = ({good,neutral,bad, total}) =>{

  if(total != null)
  return(
    <div>
      <h1>Stadistics</h1>
    <p>good: {good} || neutral: { neutral} || bad: {bad} </p>
    <p>Total: {total}</p>
    </div>
  )
  else
  return(
    <div>
      <h1>Stadistics</h1>
      <p>no feedback given</p>
    </div>
  )
} 

const Average = ({average, total}) =>{

  if(average!= null)
  return(
    <div>
    <p>Average: {average / total}</p>
    
    </div>
  )
  else
  return(
    <p></p>
    )
}

const Percentage = ({good, total}) =>{

  if(total!= null)
  return(
    <div>
    <p>Positive percetage: {(good * 100)/total}</p>
    </div>
  )
  else
  return(
    <p></p>
  )
}



export const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(null)
  const [average, setAverage] = useState(null)


  const addGoodOp = () => {
  setGood(good + 1) 
  setTotal(total+1)
  setAverage(average + 1)}

  const addNeutralOp = () => {setNeutral(neutral + 1)
    setTotal(total+1)}

  const addBadOp = () => {setBad(bad + 1)
    setTotal(total+1)
    setAverage(average-1)
  }

  return (
    <>
    <div>
    <h1>Give feedback</h1>
    
    <Satisfaction handleClick={addGoodOp} op='Good'  />
    <Satisfaction handleClick={addNeutralOp} op='Neutral'  />
    <Satisfaction handleClick={addBadOp} op='Bad'  />
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <table style={{ display: 'flex', alignItems: 'center' }}>
    <tbody>
    <tr style={{display: 'flex',  flexDirection: 'column' } }>
      <td style={{ textAlign: 'center' }}><Display good={good} neutral={neutral} bad={bad} total={total}/></td>
      <td style={{ textAlign: 'center' }}><Average average={average} total={total} /></td>
      <td style={{ textAlign: 'center' }}><Percentage good={good} total={total} /></td>
      </tr>
      </tbody>
      </table>
    </div>
    </>
  )
}

