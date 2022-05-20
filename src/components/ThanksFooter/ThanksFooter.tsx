import React from 'react';

import { Button, Card } from '../../library';
import { ThanksFooterProps } from './ThanksFooter.types';

const ThanksFooter: React.FC<ThanksFooterProps> = ({ doneHandler }) => {
  return (
    <Card isFooterCard>
      <Button click={doneHandler} type="secondary">Done</Button>
    </Card>
  );
}

export default ThanksFooter;