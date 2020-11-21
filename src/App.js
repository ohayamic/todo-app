import './App.css';
import Todo from './Todo'
import TodoForm from './TodoForm'
import {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container  } from '@material-ui/core';
import db from './firebase.js'
import firebase from 'firebase'


// From material UI 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,  
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    textAlign: 'center',
    maxWidth: 750,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));




function App() {

// two functions from react material ui
const classes = useStyles();

// function state customised
const [Todos, setTodos] = useState([])
const [Input, setInput] = useState('')

// Get the content of the database when the app loads
// Firebase in action
useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    //console.log(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo}))) //Get the snapshot of the database
    setTodos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
  })
}, [Todos])

// function to get text from input tag
const getInput = (e) =>{
let value = e.target.value
setInput(value)
}

// function to get the input and add it to the todos list
const addTodos = (e)=>{
  e.preventDefault()
  console.log(firebase.firestore)
  db.collection('todos').add({
    todo:Input,
    timestamp : firebase.firestore.FieldValue.serverTimestamp()
  })
  setInput('')  // this empties the content of the input element
}
  return (
    <Container fixed className={classes.demo}>
        <TodoForm getInputs={Input} addTodos={addTodos} getInput={getInput} classes={classes}/>
        {Todos.map((todo)=>{
          return(
            <Todo todo ={todo} key={todo.id} getInput={getInput}/>
          )
        })} 
    </Container >
  );
}

export default App;
