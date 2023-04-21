import styled from "styled-components";

export const SOuterContainer = styled.div`
  width: 100%;
  background: transparent;
  height: var(--app-height);
  max-height: var(--app-height);
  position: relative;
  overflow-y: auto;
`;

export const SScrollableContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0 auto;
`;

export const SInnerContainer = styled.div`
  height: 100%;
`;
