'use client';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import styles from '../page.module.css';
import TaskCard from 'app/components/taskCard';
import { Label } from 'app/page';

export default function About() {
  const [taskCards, setTaskCards] = useState<Label[]>([]);
  const exampleLabel: Label = {
    title: 'Weekly Plants',
    checkList: ['Shado Benni'],
  };

  const addTask = () => {
    //create a TaskCard component and place it in the screen
    setTaskCards([...taskCards, exampleLabel]);
  };

  // const TaskContainer = () => {
  //   return(
  //     <>
  //       {taskCards.map((t,i) =>
  //         <TaskCard labels={t.} key={i} />
  //       )}
  //     </>
  //   )
  // }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.button}
          variant='contained'
          onClick={() => addTask()}
        >
          Add Task
        </Button>
      </div>
      <Box className='taskCards' sx={{ width: '1.5rem' }}>
        <TaskCard title={'New Title'} />
      </Box>
    </Box>
  );
}
