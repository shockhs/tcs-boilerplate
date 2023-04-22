import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SContainer = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 56px rgba(0, 0, 0, 0.12);
`;

export const SInnerContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const SNavigation = styled.nav`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 1rem;
  }
`;

export const SNavLink = styled(NavLink)`
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--app-font--color);
`;
