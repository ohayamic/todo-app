import React from 'react'
import {Button, TextField } from '@material-ui/core';

export const TodoForm = (props) => {
    return (
        <section>
            <h1>My to do app</h1>
        <form  noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard"  value={props.Input} onChange={props.getInput}/>    
            <Button variant="contained" color="primary" type ='submit' onClick={props.addTodos} classes={props.classes.title}>
                Add Todo
            </Button>          
        </form>
        </section>
    )
}

export default TodoForm