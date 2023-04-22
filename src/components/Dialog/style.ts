import styled from 'styled-components';

export const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: #333333;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

export const SContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: fit-content;
  width: 100%;
  padding: 1.25rem;
  max-width: calc(100% - 2rem);
  max-height: var(--tg-viewport-stable-height, 100vh);
  box-sizing: border-box;
  z-index: 100;
  overflow: auto;
  background: #ffffff;
  opacity: 0;
  border: 2px solid transparent;
  border-radius: 6px;
  transform: translateY(-25%) translateX(-50%);
  animation: loading 0.15s ease-out forwards;
`;
