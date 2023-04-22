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

export const SCosts = styled.table`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const SHeader = styled.thead`
  display: grid;
  align-items: center;
  width: 100%;
  text-align: left;
  grid-template-columns: repeat(3, 200px) min-content;
  height: 3rem;
  border-bottom: 2px solid var(--color-secondary);
`;

export const STableTitle = styled.span``;
