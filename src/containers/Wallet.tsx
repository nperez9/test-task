import React, { useContext, useEffect } from "react";

import AppContext from '../context/background/AppContext';
import Resume from './Resume';
import Send from './SendMoney';
import Thanks from './Thanks';
import { Steps } from './Wallet.types';

const Wallet = () => {  
  const { state: { step } } = useContext(AppContext);

  let component = null;
  switch(step) {
    case Steps.RESUME:
      component = <Resume />;
      break;
    case Steps.SEND:
      component = <Send />;
      break;
    case Steps.DONE: 
      component = <Thanks />;
      break;
  }

  return component;
};

export default Wallet;