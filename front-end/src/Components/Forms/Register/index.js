import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { Form, Label, Input, Button, Error } from '../Login/styles';

const MIN_PASS = 6;
const MIN_NAME = 12;

const schema = yup.object({
  name: yup.string().min(MIN_NAME).required(),
  email: yup.string().email().required(),
  password: yup.string().min(MIN_PASS).required(),
}).required();

function Register() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const { name, email, password } = data;
      const login = await axios.post('http://localhost:3001/users', { name, email, password });
      console.log(login);
      localStorage.setItem('user', JSON.stringify(login.data));
      navigate(`/${login.data.role}/products`);
    } catch (e) {
      const waitTime = 3000;
      setHasError(true);
      setTimeout(() => setHasError(false), waitTime);
      console.log(e);
    }
  };

  return (
    <div className="App">
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <Label htmlFor="name">
          Nome
          <Input
            data-testid="common_register__input-name"
            id="name"
            type="text"
            { ...register('name') }
          />
        </Label>

        <Label htmlFor="login">
          Email
          <Input
            data-testid="common_register__input-email"
            id="login"
            type="email"
            { ...register('email') }
          />
        </Label>

        <Label htmlFor="password">
          Senha
          <Input
            data-testid="common_register__input-password"
            id="password"
            type="text"
            { ...register('password') }
          />
        </Label>

        <Button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ !formState.isValid }
        >
          CADASTRAR
        </Button>

        {hasError && (
          <Error
            data-testid="common_register__element-invalid_register"
          >
            Nome ou email já em uso.
          </Error>
        )}
      </Form>
    </div>
  );
}

export default Register;
