import styled from "styled-components";

export const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 2rem;
  }
`;

export const SCategories = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const SCategoryElement = styled.div`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 1rem;
  }
`;

export const SDeleteButton = styled.button`
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
