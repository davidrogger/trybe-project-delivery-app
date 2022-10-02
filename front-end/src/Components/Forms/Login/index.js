import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Label, Input, Button, Error } from './styles';
import { login } from '../../../services/api';
import MyContext from '../../../context/MyContext';

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
            data-testid="common_login__element-invalid-email"
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
