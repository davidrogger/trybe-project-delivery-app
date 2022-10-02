import PropTypes from 'prop-types';
import React from 'react';
import * as Style from './styles';

function UserList({ usersList }) {
  const tableHead = ['ID', 'Nome', 'Email', 'Tipo', 'Excluir'];
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
            !usersList ? null : usersList.map((el, index) => (
              <tr key={ index }>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.role}</td>
                <td>
                  <Style.Button type="button">Excluir</Style.Button>
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
