import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { registerByAdmin } from '../../services/api';
import * as style from './styles';

function AddNewUser({ setHasList }) {
  const [disableButton, setDisableButton] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userAlreadyTaken, setUserAlreadyTaken] = useState(false);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleChange = (target) => {
    const { id, value } = target;
    if (id === 'user-name') setName(value);
    if (id === 'user-email') setEmail(value);
    if (id === 'user-password') setPassword(value);
    if (id === 'select-role') setRole(value);
  };
  const register = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await registerByAdmin({ name, email, password, role }, user.token);

    if (!response) {
      setUserAlreadyTaken(true);
    }

    if (response) {
      setHasList(false);
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
    }
  };
  const errorUserExist = () => (
    <span data-testid="admin_manage__element-invalid-register">
      Usuário já cadastrado
    </span>
  );
  useEffect(() => {
    const validate = () => {
      const charactersName = 12;
      const charactersPassword = 6;
      const regexEmail = /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/ig;
      const checkEmail = regexEmail.test(email);
      const checkName = name.length >= charactersName;
      const checkPassword = password.length >= charactersPassword;
      const checkRole = role !== '';
      return (checkEmail && checkName && checkPassword && checkRole);
    };
    setDisableButton(validate());
  }, [name, email, password, role]);

  return (
    <style.Main>
      <style.Title>Cadastrar Novo Usuário</style.Title>
      <style.Inputs>
        <style.Label htmlFor="user-name">
          Nome
          <input
            type="text"
            name="name"
            id="user-name"
            value={ name }
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ (e) => handleChange(e.target) }
          />
        </style.Label>
        <style.Label htmlFor="user-email">
          Email
          <input
            type="email"
            name="email"
            id="user-email"
            value={ email }
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            onChange={ (e) => handleChange(e.target) }
          />
        </style.Label>
        <style.Label htmlFor="user-password">
          Senha
          <input
            type="password"
            name="password"
            id="user-password"
            value={ password }
            placeholder="********"
            data-testid="admin_manage__input-password"
            onChange={ (e) => handleChange(e.target) }
          />
        </style.Label>

        <style.Label htmlFor="elect-role">
          Tipo
          <select
            value={ role }
            id="select-role"
            data-testid="admin_manage__select-role"
            onChange={ (e) => handleChange(e.target) }
          >
            <option value="">Selecione</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </style.Label>

        <style.Btn
          type="button"
          id="register-button"
          data-testid="admin_manage__button-register"
          onClick={ register }
          disabled={ !disableButton }
        >
          CADASTRAR
        </style.Btn>
      </style.Inputs>
      { userAlreadyTaken && errorUserExist() }
    </style.Main>
  );
}

AddNewUser.propTypes = {
  setHasList: PropTypes.func,
}.isRequired;

export default AddNewUser;
