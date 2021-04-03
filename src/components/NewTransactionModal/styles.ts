import styled from 'styled-components'
import { darken, transparentize } from 'polished'
// https://polished.js.org/docs/#darken
// https://polished.js.org/docs/#transparentize
// documentação da biblioteca de funções dentro do styled component

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5em;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background-color: #e7e9ee;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    // Hack para "cada botão que tiver um anterior adicionar o margin top"
    & + input {
      margin-top: 1rem;
    }
  }

    button[type="submit"] {
      width: 100%;
      height:4rem;

      padding: 0 1,5rem;
      margin-top: 1.5rem;

      color: #fff;
      background-color: var(--green);

      border-radius: 0.25rem;
      border: 0;

      font-size: 1rem;
      font-weight:600;

      transition: filter 0.2s; 

      &:hover{
        filter: brightness(0.9);
      }
    }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background-color: ${(props) => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size:1rem;
    color: var(--text-title);
  }
`;