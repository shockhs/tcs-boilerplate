import styled from "styled-components";

export const SCategoryElement = styled.div`
  display: grid;
  width: 400px;
  grid-template-columns: auto min-content;
  border-bottom: 1px solid var(--color-secondary);

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
  background: transparent;
  color: var(--color-error);
  height: 2rem;
`;

export const STitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;
