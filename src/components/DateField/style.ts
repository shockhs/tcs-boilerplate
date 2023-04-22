import styled from "styled-components";

export const SField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const SCalendarButton = styled.button`
  cursor: pointer;
  display: flex;
  border-radius: 6px;
  align-items: center;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  background: var(--color-secondary);
  outline: none;
  border: 1px solid var(--color-black);
  border-radius: 4px;
  height: 3rem;

  & > * + * {
    margin-left: 0.5rem;
  }
`;

export const SDateRangeContent = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 1rem;
  }
`;

export const SDateRangeDialogFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > * + * {
    margin-left: 0.75rem;
  }
`;

export const SPickerLabel = styled.span`
  font-size: 0.875rem;
`;

export const SDateRangeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 4px 56px var(--color-shadow);
`;

export const SButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  width: fit-content;
  height: fit-content;
  color: var(--link-rest--color);

  &:hover {
    color: var(--link-hover--color);
  }
`;
