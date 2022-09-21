import React from 'react';

function Login() {
  return (
    <div className="App">
      <form>
        <label htmlFor="login">
          Login
          <input type="text" id="login" />
        </label>
        <label htmlFor="senha">
          Senha
          <input type="text" id="senha" />
        </label>

        <button type="button">
          LOGIN
        </button>
        <button type="button">
          Ainda não tenho conta
        </button>

      </form>

    </div>
  );
}

export default Login;
