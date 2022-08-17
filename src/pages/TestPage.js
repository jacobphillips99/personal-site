import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& p': {
      margin: 0,
      '&$title': {
        margin: '0 0 16px',
      },
    },
  },
  title: {},
}));

const TestPage = () => {
  const classes = useStyles();
  return (
    <div className="TestPage">
      <p>This paragraph isnt affected.</p>
      <p>This paragraph isnt affected.</p>
      <div className={classes.root}>
        <p className={classes.title}>My title</p>
        <p>A paragraph</p>
        <p>Another paragraph</p>
      </div>
    </div>
  );
};

export default TestPage;
