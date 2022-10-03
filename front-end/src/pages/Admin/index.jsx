import React, { useEffect, useState } from 'react';

import Navbar from '../../Components/Navbar';
import Admin from '../../Components/Admin';
import UserList from '../../Components/UsersList';
import Loading from '../../Components/Loading';

import { getAllUsers } from '../../services/api';

function AdminPage() {
  const [hasList, setHasList] = useState(false);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const getList = async () => {
        const response = await getAllUsers(user.token);
        setUsersList(response.data);
        setHasList(true);
      };
      getList();
    }
  }, [hasList]);

  return (
    <>
      <Navbar />
      <Admin
        setHasList={ setHasList }
      />
      {
        hasList ? (
          <UserList
            setHasList={ setHasList }
            usersList={ usersList }
          />
        ) : <Loading />
      }
    </>
  );
}

export default AdminPage;
