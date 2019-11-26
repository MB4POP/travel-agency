/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = (props) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} type="number"
      value={props.currentValue}
      min={props.limits.min} max={props.limits.max}
      onChange={event => props.setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
