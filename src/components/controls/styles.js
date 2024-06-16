import styled from "styled-components"

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  /* grid-template-rows: 100px;
  grid-template-columns: 1fr, 1fr, 1fr, 1fr; */
  /* place-content: center; */
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4rem;
  gap: 2rem;

  background-color: ${({theme}) => theme.COLORS.LIGHT_DARK};

  color: ${({theme}) => theme.COLORS.LIGHT};

  border-radius: 3rem;

  > button {
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
  }

  .soundOn {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }
`