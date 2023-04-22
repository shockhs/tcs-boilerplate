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

export const SCosts = styled.ul`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.5rem;
  }
`;
