import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1rem;
`;

export const STextField = styled.input`
  border: none;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  background: var(--color-secondary);
  outline: none;
  border: 1px solid var(--color-black);
  border-radius: 4px;
  height: 3rem;
`;

export const SNoteField = styled.textarea``;

export const SNumericFieldContainer = styled.div`
  & input {
    border: none;
    padding: 0.5rem 0.25rem 0.5rem 0.5rem;
    background: var(--color-secondary);
    outline: none;
    border: 1px solid var(--color-black);
    border-radius: 4px;
    height: 3rem;
  }
`;
