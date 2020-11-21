import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import db from './firebase';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const[Input, setInput] = React.useState('');
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateText = () =>{
    db.collection('todos').doc(props.todo.id).set({
      todo:Input},{merge:true})
    setOpen(false);
  }

  const body = (
    <section style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Edit your todo</h2>
      <p id="simple-modal-description">
            <TextField id="standard-multiline-flexible" label="Edit" multiline rowsMax={5} placeholder={props.todo.todo} onChange={e=>setInput(e.target.value)}/>  
            <Button type="button"variant="outlined" color="primary"  onClick={updateText}>
                Update
            </Button>
      </p>
    </section>
  );

  return (
    <section>
      <Button type="button"variant="outlined" color="primary"  onClick={handleOpen}>
        Edit Todo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </section>
  );
}
