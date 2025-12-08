import styled from 'styled-components';
import { AddButton } from '../../app/pages/admin/styles';

export const FormWrapper = styled.div`  
  /* O padding foi movido para o ModalContent para melhor controle do scroll */
  padding: 0 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
  }

  input, select, textarea {
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.sky};
    border-radius: 6px;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', sans-serif;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.sky};
    }
  }

  textarea {
    min-height: 80px;
    resize: vertical;
  }
`;

export const SubmitButton = styled(AddButton)`
  margin-top: 1rem;
  width: 100%;
  
  @media (max-width: 576px) {
    width: 100%;
    height: auto;
    border-radius: 6px;
    padding: 0.75rem 1.5rem;
  }
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.sky};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: text;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.sky};
  }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;

  button {
    background: none;
    border: none;
    color: #ffffff;
    margin-left: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0;
    opacity: 0.7;
    &:hover { opacity: 1; }
  }
`;
