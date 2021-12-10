import React from 'react';
import Title from '../layout/Title';
import SubTitle from '../layout/Subtitle';

const Submit = () => {
  return (
    <React.Fragment>
      <Title stepTitle='Submit success' />
      <SubTitle
        stepSubTitle={
          <span>
            <h1>Thank you for your Submission</h1>
             <p>A link will be sent to your Email</p>
          </span>
        }
      />
    </React.Fragment>
  );
};

export default Submit;
