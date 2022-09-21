import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Label, Input, Button, Error } from './styles';

const MAX_PASS = 6;

const schema = yup.object({
  email: yup.string().email().required(),
  senha: yup.string().max(MAX_PASS).required(),
}).required();

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', senha: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <Label htmlFor="login">
          Login
          <Input
            data-testids="common_login__input-email"
            id="login"
            type="email"
            { ...register('email') }
          />
          <Error
            data-testids="common_login__element-invalid-email"
          >
            {errors.email?.message}

          </Error>
        </Label>
        <Label htmlFor="senha">
          Senha
          <Input
            data-testids="common_login__input-password"
            id="senha"
            type="text"
            { ...register('senha') }
          />
          <Error>{errors.senha?.message}</Error>
        </Label>

        <Button
          data-testids="common_login__button-login"
          type="submit"
        >
          LOGIN
        </Button>
        <Button
          data-testids="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </Button>
      </Form>
    </div>
  );
}

export default Login;
