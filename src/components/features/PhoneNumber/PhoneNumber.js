/* eslint-disable linebreak-style */
import React from 'react';
import styles from './PhoneNumber.scss';

class PhoneNumber extends React.Component {
  constructor() {
    super();
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  getCountdownTime() {
    const currentTime = new Date();
    const officeClose = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(), 22, 0, 0, 0, ),
    );
    const amandaTime = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(), 8, 0, 0, 0, ),
    );
    const tobiasTime = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(), 12, 0, 0, 0, ),
    );
    const helenaTime = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(), 16, 0, 0, 0, ),
    );

    if (
      currentTime.getTime() > amandaTime.getTime()
      &&
      currentTime.getTime() < tobiasTime.getTime()
    ) {
      return `Amanda: 678.243.8455`;
    } else if (
      currentTime.getTime() > tobiasTime.getTime()
      &&
      currentTime.getTime() < helenaTime.getTime()
    ) {
      return `Tobias: 278.443.6443`;
    } else if (
      currentTime.getTime() > helenaTime.getTime()
      &&
      currentTime.getTime() < officeClose.getTime()
    ) {
      return `Helena: 167.280.3970`;
    } else {
      return `Office closed`;
    }
  }

  render() {
    return (
      <div className={styles.component}>
        {this.getCountdownTime() === 'Office closed' ? null : (
          <h3 className={styles.title}></h3>
        )}
        <div className={styles.promoDescription}>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

export default PhoneNumber;
