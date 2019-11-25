/* eslint-disable linebreak-style */
import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import formatPrice from '../../../utils/formatPrice.js';

const OrderSummary = props => {
  formatPrice(props.tripCost);
  calculateTotal(formatPrice, props.options);

  <h2 className={styles.component}>
    Total<strong>{calculateTotal}</strong>
  </h2>;
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
