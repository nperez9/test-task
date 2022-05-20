import React from 'react';

import { Card, Button } from '../../library';
import { SendFooterProps } from './SendFooter.types';
import styles from './SendFooter.module.scss';

const SendFooter: React.FC<SendFooterProps> = ({ cancelHandler, doneHandler}) => {
  return (
    <Card classname={styles.SendFooter} isFooterCard>
      <Button click={cancelHandler}>Cancel</Button>
      <Button click={doneHandler} type="secondary">Next</Button>
    </Card>
  );
}

export default SendFooter;