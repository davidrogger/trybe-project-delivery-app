import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Admin from '../../Components/Admin';
import UserList from '../../Components/UsersList';
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
  }, []);

  return (
    <>
      <Navbar />
      <Admin />
      {
        hasList ? (
          <UserList
            usersList={ usersList }
          />
        ) : <div>Loading...</div>
      }
    </>
  );
}

export default AdminPage;
