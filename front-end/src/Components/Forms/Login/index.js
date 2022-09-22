import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Label, Input, Button, Error } from './styles';

const MIN_PASS = 6;

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(MIN_PASS).required(),
}).required();

function Login() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const login = await axios.post('http://localhost:3001/login', { email, password });
      console.log(login);
      localStorage.setItem('user', JSON.stringify(login.data));
      // navigate('/products');
    } catch (error) {
      setHasError(true);
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <Label htmlFor="login">
          Login
          <Input
            data-testid="common_login__input-email"
            id="login"
            type="email"
            { ...register('email') }
          />

        </Label>
        <Label htmlFor="senha">
          Senha
          <Input
            data-testid="common_login__input-password"
            id="senha"
            type="text"
            { ...register('password') }
          />

        </Label>

        <Button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ !formState.isValid }
        >
          LOGIN
        </Button>
        <Button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </Button>

        {hasError && (
          <Error
            data-testids="common_login__element-invalid-email"
          >
            Usuário ou senha incorretos
          </Error>
        )}
      </Form>
    </div>
  );
}

export default Login;

// tip usando useForm: https://github.com/react-hook-form/react-hook-form/issues/77#issuecomment-596346814
