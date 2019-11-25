/* eslint-disable linebreak-style */
import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderSummary = props => {
  const fullPrice = calculateTotal(props.tripCost, props.options);
  const priceFormat = formatPrice(fullPrice);
  return (
    <h2 className={styles.component}>
      Total<strong>{priceFormat}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
