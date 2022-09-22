import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Label, Input, Button, Error } from '../Login/styles';

const MIN_PASS = 6;

const schema = yup.object({
  name: yup.string().min().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(MIN_PASS).required(),
}).required();

function Register() {
  const { register, handleSubmit, formState: { errors }, formState } = useForm({
    defaultValues: { name: '', email: '', senha: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = () => {
    console.log('logando!');
  };

  return (
    <div className="App">
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <Label htmlFor="name">
          Nome
          <Input
            data-testid="common_login__input-email"
            id="name"
            type="text"
            { ...register('name') }
          />

        </Label>

        <Label htmlFor="login">
          Email
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
          <Error>{errors.senha?.message}</Error>
        </Label>

        <Button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ !formState.isValid }
        >
          CADASTRAR
        </Button>
      </Form>
      <Error
        data-testids="common_login__element-invalid-email"
      >
        {errors.email?.message}

      </Error>
    </div>
  );
}

export default Register;
