import PropTypes from 'prop-types';
import React from 'react';
import * as Style from '../OrderList/styles';

function UserList({ usersList }) {
  const tableHead = ['ID', 'Nome', 'Email', 'Tipo', 'Excluir'];
  return (
    <div>
      <Style.OrderTable>
        <thead>
          <Style.TableRow>
            {
              tableHead.map((title, index) => (
                <Style.TableHeader key={ index }>{title}</Style.TableHeader>
              ))
            }
          </Style.TableRow>
        </thead>
        <tbody>
          {
            !usersList ? null : usersList.map((el, index) => (
              <Style.TableRow key={ index }>
                <Style.RowItem>{el.id}</Style.RowItem>
                <Style.RowItem>{el.name}</Style.RowItem>
                <Style.RowItem>{el.email}</Style.RowItem>
                <Style.RowItem>{el.role}</Style.RowItem>
                <Style.RowItem>
                  <button type="button">Excluir</button>
                </Style.RowItem>
              </Style.TableRow>
            ))
          }
        </tbody>
      </Style.OrderTable>
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
