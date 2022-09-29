import PropTypes from 'prop-types';
import * as style from './styles';

function TotalValueDisplay({ tableType, value, userType }) {
  return (
    <style.TotalValueField>
      Total: R$:
      {' '}
      <span
        data-testid={ `${userType}_${tableType}__element-order-total-price` }
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
