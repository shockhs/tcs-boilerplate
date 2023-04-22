import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  width: 100%;

  & > * + * {
    margin-left: 2rem;
  }
`;

export const SInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const SCategoriesInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 1rem;
  }
`;

export const STitle = styled.span`
  color: var(--color-main);
  font-size: 1.5rem;
`;

export const SCategoryCostInfoTitle = styled.span`
  color: var(--color-main);
  font-size: 0.875rem;
`;

export const SBlockTitle = styled.span`
  color: var(--color-main);
  font-size: 1.5rem;
`;

export const SValue = styled.span`
  color: var(--primary-hover--color);
  font-weight: 600;
  font-size: 2rem;
`;

export const SCategoryCostInfoValue = styled.span`
  color: var(--primary-hover--color);
  font-weight: 600;
  font-size: 1rem;
`;

export const SListCategoriesCostInfo = styled.ul`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const SCategoryCostInfoContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 200px auto min-content;
`;

export const SCategoryPercentageCostValue = styled.span`
  color: var(--link-rest--color);
  margin-left: 0.25rem;
`;
