import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Label, Input, Button, Error } from '../Login/styles';

const MIN_PASS = 6;
const MIN_NAME = 12;

const schema = yup.object({
  name: yup.string().min(MIN_NAME).required(),
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

        <Label htmlFor="senha">
          Senha
          <Input
            data-testid="common_register__input-password"
            id="senha"
            type="text"
            { ...register('senha') }
          />
        </Label>

        <Button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ !formState.isValid }
        >
          CADASTRAR
        </Button>

        <Error
          data-testids="common_register__element-invalid_register"
        >
          {errors.email?.message}
        </Error>
      </Form>
    </div>
  );
}

export default Register;
