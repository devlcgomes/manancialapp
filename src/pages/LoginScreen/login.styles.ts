import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f5f7ff;
  position: relative;
`

export const LoginBox = styled.div`
  background: var(--white);
  border-radius: 24px;
  padding: 3rem;
  width: calc(100% - 2rem);
  max-width: 420px;
  box-shadow: var(--box-shadow);
  position: relative;
  animation: ${fadeIn} 0.8s ease;

  @media (min-width: 768px) {
    padding: 3.5rem;
    max-width: 480px;
  }

  &::before {
    content: '🎵';
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    animation: ${float} 3s ease-in-out infinite;
  }
`

export const LoginTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

export const LoginSubtitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;

  span {
    display: block;
    font-size: 0.875rem;
    opacity: 0.8;
    margin-top: 0.25rem;
  }
`

export const InputContainer = styled.div`
  margin-bottom: 1.75rem;

  label {
    display: block;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: var(--text);
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--border);
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.2s;
    background-color: var(--white);

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }

    &::placeholder {
      color: #9CA3AF;
    }
  }
`

export const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
`

export const SignInButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: '🎸';
    position: absolute;
    right: 1.5rem;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`

export const Divider = styled.div`
  text-align: center;
  margin: 2rem 0;
  position: relative;
  color: var(--text-secondary);
  font-size: 0.875rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background-color: var(--border);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`

export const SocialLoginContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.875rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--white);
  color: var(--text);
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  max-width: 220px;
  margin: 0 auto;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f8f9ff;
    border-color: var(--primary);
  }

  img {
    width: 18px;
    height: 18px;
  }
`

export const FooterText = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
`

export const FooterLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`

