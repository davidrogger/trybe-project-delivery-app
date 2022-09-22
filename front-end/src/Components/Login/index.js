import React, { useState } from 'react';
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
  const [isDisable, setDisable] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { email: '', senha: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (errors.senha && errors.email) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    console.log(isDisable);
    console.log(data);
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
          <Error
            data-testids="common_login__element-invalid-email"
          >
            {errors.email?.message}

          </Error>
        </Label>
        <Label htmlFor="senha">
          Senha
          <Input
            data-testid="common_login__input-password"
            id="senha"
            type="text"
            { ...register('senha') }
          />
          {/* <Error>{errors.senha?.message}</Error> */}
        </Label>

        <Button
          data-testid="common_login__button-login"
          type="submit"
          disable={ isDisable }
        >
          LOGIN
        </Button>
        <Button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </Button>
      </Form>
    </div>
  );
}

export default Login;
