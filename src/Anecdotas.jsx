import { useState } from "react";
import './App.css'



let anecdotes = [
    {
      anec: 'If it hurts, do it more often',
      vote: 0
    },
    {
      anec: 'Adding manpower to a late software project makes it later!',
      vote: 0
    },
    {
      anec: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      vote: 0
    },
    {
      anec: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      vote: 0
    },
    {
      anec: 'Premature optimization is the root of all evil.',
      vote: 0
    },
    {
      anec: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      vote: 0
    }
  ];
  

  const ReRoll = ({handleClick, text}) =>{

    return(
        <button onClick={handleClick}>{text}</button>
    )
  }

let index;

export default function Anecdota (){
    const [anecdote, setAnecdote] = useState('')
  
    const [votes, setVotes] = useState('no hay frase aún')
    
     const changeAnec = () =>{
        index = Math.floor(Math.random() * anecdotes.length)
        //console.log(anecdotes[index])
        setAnecdote(anecdotes[index].anec)

        setVotes(anecdotes[index].vote)
        //  console.log("var v: " + anecdotes[index].vote)
      }
    
      
      
    const addVote = () => {
        if(votes!= 'no hay frase aún'){
         anecdotes[index].vote = anecdotes[index].vote + 1
        setVotes(anecdotes[index].vote)
        //console.log("var luego del click: " + anecdotes[index].vote)
       //votesList = anecdotes.map(item => item.vote)

        //const max = Math.max(...anecdotes.vote);
        //console.log(votesList) 
        }
        else{
            return(console.log("Aún no hay una anecdota "))
        }
        
      }

    const Display = () =>{
      const votesList = anecdotes.map(item => item.vote)
      const max = Math.max(...votesList)
      const iMax = votesList.indexOf(max)
      console.log(iMax + " ae")
      if (max == 0){
        return(
          <div>
            <p></p>
          </div>
        )
      }

      return(
        <div>
        <p>Anecdote with most votes: </p>
        <p>{anecdotes[iMax].anec}  </p>
        <p>With: {max} votes</p>
        </div> 
      )
      }
      
    
    
    return(
        <div>
        <p>{anecdote}</p>
        <ReRoll text='Cambiar anecdota' handleClick={changeAnec} />
        <ReRoll text={'Votes : '+ votes} handleClick={addVote}/>
        <Display />
        </div>   
    )
} 