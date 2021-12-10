import React from 'react';
import Title from '../layout/Title';
import SubTitle from '../layout/Subtitle';

const Instructions = ({ values, handleChange }) => {
  return (
    <React.Fragment>
      <Title stepTitle=' Welcome to Swedbank' />
      <SubTitle
        stepSubTitle={
          <span>
           
            <br />
            <br />
            Please Fill in the following Information
          </span>
        }
      />
    </React.Fragment>
  );
};

export default Instructions;
