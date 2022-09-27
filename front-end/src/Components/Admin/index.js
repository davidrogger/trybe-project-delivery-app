import React, { useState } from 'react';
import * as style from './styles';

function AddNewUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleChange = (target) => {
    const { id, value } = target;
    if (id === 'user-name') setName(value);
    if (id === 'user-email') setEmail(value);
    if (id === 'user-password') setPassword(value);
    if (id === 'select-role') setRole(value);
  };
  const createUser = async () => {
    const result = await createNewUserByAdmin({ name, email, password, role, token });
    if (result) {
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
    }
  };

  return (
    <main>
      <style.Title>Cadastrar Novo Usuário</style.Title>
      <form>
        <style.Label htmlFor="name">
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
        <style.Label htmlFor="email">
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
        <style.Label htmlFor="password">
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
        <button
          type="button"
          id="register-button"
          data-testid="admin_manage__button-register"
          onClick={ createUser }
        >
          CADASTRAR
        </button>
      </form>
    </main>
  );
}
export default AddNewUser;
