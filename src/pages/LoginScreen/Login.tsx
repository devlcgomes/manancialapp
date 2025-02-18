import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { 
  LoginContainer, 
  LoginBox, 
  LoginTitle, 
  LoginSubtitle,
  InputContainer,
  PasswordInputWrapper,
  TogglePasswordButton,
  SignInButton,
  SocialLoginContainer,
  SocialButton,
  Divider,
  FooterText,
  FooterLink
} from './login.styles';

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Aqui implementaremos a lógica do Firebase
  }

  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>
          Manancial
        </LoginTitle>
        <LoginSubtitle>
          Ministério de Louvor da AD Campinas{" "}
          <span>Rio Verde - GO</span>
        </LoginSubtitle>

        <Form.Root onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Form.Field name="email">
              <Form.Label>Seu E-mail</Form.Label>
              <Form.Control asChild>
                <input 
                  type="email" 
                  placeholder="Digite seu e-mail de acesso"
                  {...register('email')}
                />
              </Form.Control>
            </Form.Field>
          </InputContainer>

          <InputContainer>
            <Form.Field name="password">
              <Form.Label>Sua Senha</Form.Label>
              <PasswordInputWrapper>
                <Form.Control asChild>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    {...register('password')}
                  />
                </Form.Control>
                <TogglePasswordButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </TogglePasswordButton>
              </PasswordInputWrapper>
            </Form.Field>
          </InputContainer>

          <SignInButton type="submit">
            Entrar para Adorar
          </SignInButton>
        </Form.Root>

        <Divider>ou acesse com</Divider>

        <SocialLoginContainer>
          <SocialButton type="button">
            <img src="/google-icon.svg" alt="Google" />
            Entrar com Google
          </SocialButton>
        </SocialLoginContainer>

        <FooterText>
          Ainda não tem acesso?{" "}
          <FooterLink>Solicitar participação</FooterLink>
        </FooterText>
      </LoginBox>
    </LoginContainer>
  )
}