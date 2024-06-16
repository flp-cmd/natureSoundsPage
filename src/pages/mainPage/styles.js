import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK};

`