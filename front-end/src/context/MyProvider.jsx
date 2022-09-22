import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  return (
    <MyContext.Provider value="oi">
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
