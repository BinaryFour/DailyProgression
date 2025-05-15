import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box/Box';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import CardActions from '@mui/material/CardActions/CardActions';
import Typography from '@mui/material/Typography/Typography';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import FormControl from '@mui/material/FormControl';
import { Label } from 'app/page';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';
import {
  CardHeader,
  colors,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
} from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';

interface TaskCardProps {
  // labels: Label;
  title: string;
}

type TaskItem = {
  id: string;
  name: string;
  isChecked: boolean;
};

const CustomFormControl = styled(FormControl)({
  // your custom styles go here
  flexDirection: 'row',
  justifyContent: 'space-between',
}) as typeof FormControl;

const emptyTask: TaskItem = {
  id: crypto.randomUUID(),
  name: '',
  isChecked: false,
};

const TaskCard = (props: TaskCardProps) => {
  const { title } = props;

  const [taskItems, setTaskItems] = useState<TaskItem[]>([emptyTask]);
  const addLine = () => {
    setTaskItems([
      ...taskItems,
      {
        id: crypto.randomUUID(),
        name: '',
        isChecked: false,
      },
    ]);
  };

  const removeLine = (id: string) => {
    setTaskItems(taskItems.filter((taskItem) => taskItem.id !== id));
  };

  const content = (
    <>
      <CardHeader
        sx={{ alignContent: 'center' }}
        title={<TextField label='Title' />}
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
      />
      <CardContent></CardContent>
      <CardActions>
        <FormGroup aria-label='position'>
          {taskItems.map((taskItem) => (
            <CustomFormControl key={taskItem.id}>
              <IconButton
                onClick={() => removeLine(taskItem.id)}
                aria-label='delete'
              >
                <Delete />
              </IconButton>
              <TextField
                variant='standard'
                aria-describedby='my-helper-text'
                placeholder='Item'
              />
              <Checkbox />
            </CustomFormControl>
          ))}
          <Button variant='text' onClick={() => addLine()}>
            Add Line
          </Button>
        </FormGroup>
      </CardActions>
    </>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>{content}</Card>
    </Box>
  );
};

export default TaskCard;
