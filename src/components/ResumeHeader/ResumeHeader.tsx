import React from 'react';

import RoundLogo from '../../library/RoundLogo';

const ResumeHeader = () => {
  
  return (
    <header>
      <RoundLogo source='/img/black-square.png' alt='Wallet logo' isInlineBlock/>
      <h1>Account</h1>
      <h2> --- wallet --</h2>
    </header>
  );
};

export default ResumeHeader;
