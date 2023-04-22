import styled from "styled-components";

export const SActionForm = styled.form`
  display: flex;
  align-items: flex-end;
  
  & > div:nth-child(1) {
    min-width: 320px;
  }

  & > * + * {
    margin-left: 1rem;
  }
`;

export const SButton = styled.button`
  padding: 0;
  border: none;
  margin-bottom: 1.5rem;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 1rem;
  background: var(--primary-rest--color);
  color: var(--color-main);
  height: 2rem;
`;
