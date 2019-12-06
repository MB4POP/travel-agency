/* eslint-disable linebreak-style */
import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

const mockProps = {
  title: 'HappyHour',
  promoDescription: 'promoDescription',
};

const HappyHourAd = () => (
  <div className={styles.component}>
    <h3 className={styles.title}>{mockProps.title}</h3>
    <div className={styles.promoDescription}>
    </div>
  </div>
);

HappyHourAd.protoTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;
