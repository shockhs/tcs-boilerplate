import { Optional } from "@/types/utils";
import styled from "styled-components";

export const SContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: flex-end;
  grid-template-columns: 320px 200px auto;

  & > * + * {
    margin-left: 1rem;
  }
`;

export const SActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  & > * + * {
    margin-left: 1rem;
  }
`;

export const SButton = styled.button<{ $primary?: Optional<boolean> }>`
  padding: 0;
  margin-bottom: 1rem;
  border: none;
  height: 3rem;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 1rem;
  background: ${({ $primary }) =>
    $primary ? "var(--primary-rest--color)" : "transparent"};
  color: var(--color-main);
`;
