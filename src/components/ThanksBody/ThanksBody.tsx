import React from 'react';

import styles from './ThanksBody.module.scss';
import { Container } from '../../library';
import { publicResource } from '../../utils';

const ThanksBody = () => {
  return (
    <Container classname={styles.ThanksBody}> 
      <img src={publicResource('/img/success.png')} alt="success" />
      <h1>Success.</h1>
      <p>You've sent Successfully your founds</p>
      <a href="">View on EtherScan</a>
    </Container>
  );
}

export default ThanksBody;