import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

  .counter__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;
  }

  .counter__title {
    font-size: 36px;
    text-transform: capitalize;
  }

  .counter__resultBox {
    width: 100%;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(128, 128, 128, 0.2);
    border-radius: 0.75rem;
    border: 2px solid rgba(0, 0, 0, 0.25);
  }

  button[type='button'] {
    padding: 0.75rem 2.25rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    color: #ffffff;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  button.increment {
    font-weight: 500;
    background-color: #00b200;
  }

  button.decrement {
    font-weight: 500;
    background-color: #ff0000;
  }
`;

export const Result = styled.h2`
  font-size: 24px;
  color: ${({ isColor }) => {
    if (isColor === 'negative') {
      return '#ff0000';
    } else if (isColor === 'positive') {
      return '#00b200';
    } else if (isColor === 0) {
      return '#000000';
    } else {
      return '#000000';
    }
  }};
`;
