import styled from "styled-components";

export const SActionForm = styled.form`
  display: flex;
  align-items: flex-end;

  & > * + * {
    margin-left: 1rem;
  }
`;

export const SButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 1rem;
  background: var(--primary-rest--color);
  color: var(--app-font--color);
  height: 2rem;
`;
