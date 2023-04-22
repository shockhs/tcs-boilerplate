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

export const SCategories = styled.table`
  display: flex;
  flex-direction: column;
`;

export const SHeader = styled.tr`
  display: grid;
  align-items: center;
  text-align: left;
  width: 400px;
  grid-template-columns: auto min-content;
  height: 3rem;
  border-bottom: 2px solid var(--color-secondary);
`;

export const STableTitle = styled.span``;
