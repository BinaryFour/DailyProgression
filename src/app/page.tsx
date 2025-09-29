'use client';

import Button from '@mui/material/Button';
import TaskCard from './components/taskCard';
//base next.js styling
import styles from './page.module.css';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';

export type Label = {
  title: string;
  checkList: string[];
};

const drawerWidth = 240;

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
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        {/* <TaskCard labels={labels} /> */}
        <h3>Welcome to my page!</h3>
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
        {/* <div className={styles.taskGrid}>{taskCards}</div> */}
      </Box>
    </Box>
  );
}
