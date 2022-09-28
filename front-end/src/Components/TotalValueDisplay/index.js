import PropTypes from 'prop-types';
import * as style from './styles';

function TotalValueDisplay({ testType, value }) {
  return (
    <style.TotalValueField>
      Total: R$:
      {' '}
      <span
        data-testid={ `customer_${testType}__element-order-total-price` }
      >
        {value}
      </span>
    </style.TotalValueField>
  );
}

TotalValueDisplay.propTypes = {
  testType: PropTypes.string,
}.isRequired;

export default TotalValueDisplay;
