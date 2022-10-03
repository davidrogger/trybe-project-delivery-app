import PropTypes from 'prop-types';
import React from 'react';
import { deleteUsersById } from '../../services/api';
import * as Style from './styles';

function UserList({ usersList, setHasList }) {
  const tableHead = ['Item', 'Nome', 'Email', 'Tipo', 'Excluir'];
  const data = usersList.filter((el) => el.role !== 'administrador');
  const testName = 'admin_manage__element-user-table-';

  const handleClick = async (userId) => {
    setHasList(false);
    const user = JSON.parse(localStorage.getItem('user'));
    await deleteUsersById(userId, user.token);
    setHasList(true);
  };

  return (
    <div>
      <Style.Table>
        <Style.THead>
          <tr>
            {
              tableHead.map((title, index) => (
                <th key={ index }>{title}</th>
              ))
            }
          </tr>
        </Style.THead>
        <Style.TBody>
          {
            !data ? null : data.map((el, index) => (
              <tr key={ el.id }>
                <td data-testid={ `${testName}item-number-${index}` }>
                  {index + 1}
                </td>
                <td data-testid={ `${testName}name-${index}` }>
                  {el.name}
                </td>
                <td data-testid={ `${testName}email-${index}` }>
                  {el.email}
                </td>
                <td data-testid={ `${testName}role-${index}` }>
                  {el.role}
                </td>
                <td>
                  <Style.Button
                    data-testid={ `${testName}remove-${index}` }
                    type="button"
                    onClick={ () => handleClick(el.id) }
                  >
                    Excluir
                  </Style.Button>
                </td>
              </tr>
            ))
          }
        </Style.TBody>
      </Style.Table>
    </div>
  );
}

UserList.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      role: PropTypes.string,
    }),
  ),
}.isRequired;

export default UserList;
