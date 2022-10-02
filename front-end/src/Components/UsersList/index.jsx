import PropTypes from 'prop-types';
import React from 'react';
import { deleteUsersById } from '../../services/api';
import * as Style from './styles';

function UserList({ usersList }) {
  const tableHead = ['ID', 'Nome', 'Email', 'Tipo', 'Excluir'];
  const data = usersList.filter((el) => el.role !== 'administrador');

  async function handleClick() {
    const user = JSON.parse(localStorage.getItem('user'));
    await deleteUsersById(data.id, user.token);
  }

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
              <tr key={ index }>
                <td data-testid={ `admin_manage__element-user-table-item-number-${el}` }>
                  {el.id}
                </td>
                <td data-testid={ `admin_manage__element-user-table-name-${el}` }>
                  {el.name}
                </td>
                <td data-testid={ `admin_manage__element-user-table-email-${el}` }>
                  {el.email}
                </td>
                <td data-testid={ `admin_manage__element-user-table-role-${el}` }>
                  {el.role}
                </td>
                <td>
                  <Style.Button
                    data-testid={ `admin_manage__element-user-table-remove-${el}` }
                    type="button"
                    onClick={ handleClick }
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
