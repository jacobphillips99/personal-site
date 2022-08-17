import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const testData = [
  {
    content: 'test1',
  },
  {
    content: 'test2',
  },
  {
    content: 'test3',
  },
];

const TestContainer = ({ data }) => (
  <p>{data.content}</p>
);

TestContainer.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};

const useStyles = makeStyles({
  testDiv: {
    color: 'red',
    '& p': {
      color: 'blue',
    },
  },
  testP: {
    color: 'green',
  },
  testUL: {
    color: 'black',
    background: 'lightblue',
    listStyleType: 'square',
    width: '300px',
    border: '15px solid green',
    padding: '50px',
    margin: '10px 10px 100px 10px',
    '& li': {
      background: 'lightgreen',
      margin: '5px',
    },
  },
});

const TestPage = () => {
  const styles = useStyles();
  return (
    <div>
      <p className={styles.testP}> p </p>
      <div className={styles.testDiv}>
        Test Page Div
        <p> hello </p>
        <p> hello2 </p>
      </div>
      <div>
        Test Page Div 2
        <p> hello again </p>
        <p> hello2 again </p>
      </div>
      <ul className={styles.testUL}>
        {/* {testData.map((data) => (
          <TestContainer data={data} key={data.data} />
        ))} */}
        {testData.map((data) => (
          <li>{data.content}</li>
        ))}
      </ul>
    </div>

  );
};

export default TestPage;
