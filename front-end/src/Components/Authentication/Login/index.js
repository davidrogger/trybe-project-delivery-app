import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Styles from '../styles';

import { login } from '../../../services/api';
import MyContext from '../../../context/MyContext';
import Logo from '../AnimatedLogo/Logo';

const MIN_PASS = 6;

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(MIN_PASS).required(),
}).required();

function Login() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const { setLogin } = useContext(MyContext);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (payload) => {
    const response = await login(payload);
    if (response) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setLogin(true);
    } else {
      const waitTime = 3000;
      setHasError(true);
      setTimeout(() => setHasError(false), waitTime);
    }
  };

  return (
    <Styles.Form onSubmit={ handleSubmit(onSubmit) }>
      <Logo />
      <Styles.Label htmlFor="login">
        Login
        <Styles.Input
          data-testid="common_login__input-email"
          id="login"
          type="email"
          { ...register('email') }
        />

      </Styles.Label>
      <Styles.Label htmlFor="senha">
        Senha
        <Styles.Input
          data-testid="common_login__input-password"
          id="senha"
          type="text"
          { ...register('password') }
        />

      </Styles.Label>

      <Styles.Button
        data-testid="common_login__button-login"
        type="submit"
        disabled={ !formState.isValid }
      >
        LOGIN
      </Styles.Button>
      <Styles.Button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Styles.Button>

      {hasError && (
        <Styles.Error
          data-testid="common_login__element-invalid-email"
        >
          Usuário ou senha incorretos
        </Styles.Error>
      )}
    </Styles.Form>
  );
}

export default Login;

// tip usando useForm: https://github.com/react-hook-form/react-hook-form/issues/77#issuecomment-596346814
