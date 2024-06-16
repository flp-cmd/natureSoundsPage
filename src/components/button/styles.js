import styled from "styled-components"

export const Container = styled.button`
  width: 8rem;
  height: 8rem;

  background-color: ${({ theme }) => theme.COLORS.LIGHT};

  display: grid;
  place-content: center;
  border-radius: .8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.DARK};
    height: 5rem;
    width: 4rem;
  }
`