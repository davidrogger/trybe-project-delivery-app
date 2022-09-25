import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);

  const session = useMemo(() => ({
    user, setUser, counter, setCounter,
  }), [user, counter]);

  return (
    <MyContext.Provider value={ session }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;

// useMemo: https://blog.agney.dev/useMemo-inside-context/
