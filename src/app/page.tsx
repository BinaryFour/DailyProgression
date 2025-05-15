'use client';

import Button from '@mui/material/Button';
import TaskCard from './components/taskCard';
//base next.js styling
import styles from './page.module.css';
import { useState } from 'react';

export type Label = {
  title: string;
  checkList: string[];
};

export default function Home() {
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
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <TaskCard labels={labels} /> */}
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            variant='contained'
            onClick={() => addTask()}
          >
            Add Task
          </Button>
        </div>
        <div>
          <TaskCard title={'New Title'} />
        </div>
        {/* <div className={styles.taskGrid}>{taskCards}</div> */}
      </main>
    </div>
  );
}
