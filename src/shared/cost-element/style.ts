import styled from "styled-components";

export const SCostElement = styled.tr`
  display: grid;
  border-bottom: 1px solid var(--color-secondary);
  width: 100%;
  grid-template-columns: repeat(4, 200px) min-content;
  align-items: center;
  height: 2rem;

  & td {
    display: flex;
    align-items: center;
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
