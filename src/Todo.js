import React from 'react'
import Modal from './Modal'
import db from './firebase.js'
import {Button, ListItem, ListItemText, List  } from '@material-ui/core';


export const Todo = (props) => {
    return (
        <List >
            <ListItem  >
                <ListItemText  primary={props.todo.todo} />
                <Button variant="contained" color="secondary" type ='submit' onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>
                    Delete Item
                </Button>  
                < Modal todo={props.todo} getInput={props.getInput}/>
            </ListItem>
        </List>
    )
}
export default Todo