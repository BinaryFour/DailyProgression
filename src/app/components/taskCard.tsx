import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box/Box';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import CardActions from '@mui/material/CardActions/CardActions';
import Typography from '@mui/material/Typography/Typography';
import FormGroup from '@mui/material/FormGroup/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';

interface TaskCardProps {
  labels: string[];
}

const TaskCard = (props: TaskCardProps) => {
  const { labels } = props;

  const taskList = labels.map((label, i) => (
    <FormControlLabel
      //index as key codesmell but whatever.  Change if data becomes more important
      key={i}
      control={<Checkbox />}
      label={label}
      labelPlacement='start'
    />
  ));

  const content = (
    <>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Water House Plants
        </Typography>
      </CardContent>
      <CardActions>
        <FormGroup aria-label='position'>{taskList}</FormGroup>
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
