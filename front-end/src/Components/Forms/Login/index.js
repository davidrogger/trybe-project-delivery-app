import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Label, Input, Button, Error } from './styles';

const MIN_PASS = 6;

const schema = yup.object({
  email: yup.string().email().required(),
  senha: yup.string().min(MIN_PASS).required(),
}).required();

function Login() {
  const { register, handleSubmit, formState: { errors }, formState } = useForm({
    defaultValues: { email: '', senha: '' },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = () => {
    console.log('logando!');
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
        >
          Ainda não tenho conta
        </Button>
      </Form>
    </div>
  );
}

export default Login;

// tip usando useForm: https://github.com/react-hook-form/react-hook-form/issues/77#issuecomment-596346814
