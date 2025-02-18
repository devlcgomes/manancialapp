import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await signIn(data.email, data.password);
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Erro completo:', error);
      
      // Tratamento de erros específicos do Firebase
      if (error.code === 'auth/wrong-password') {
        toast.error('Senha incorreta');
      } else if (error.code === 'auth/user-not-found') {
        toast.error('Usuário não encontrado');
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Email inválido');
      } else {
        toast.error('Erro ao fazer login: ' + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error: any) {
      toast.error('Erro ao fazer login com Google.');
    } finally {
      setIsLoading(false);
    }
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
                  {...register('email', { 
                    required: 'E-mail é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'E-mail inválido'
                    }
                  })}
                />
              </Form.Control>
              {errors.email && (
                <Form.Message>{errors.email.message}</Form.Message>
              )}
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

          <SignInButton type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar para Adorar'}
          </SignInButton>
        </Form.Root>

        <Divider>ou acesse com</Divider>

        <SocialLoginContainer>
          <SocialButton 
            type="button" 
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
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