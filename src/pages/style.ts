import styled from "styled-components";

export const SOuterContainer = styled.div`
  width: 100%;
  background: transparent;
  height: var(--app-height);
  max-height: var(--app-height);
  width: 100%;
  position: relative;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 4rem calc(100% - 8rem);
`;

export const SScrollableContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

export const SInnerContainer = styled.div`
  height: 100%;
  padding: 2rem 0;
`;
