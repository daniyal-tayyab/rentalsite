import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme.blue};
  }

  h2 {
    font-size: 4rem;
    margin: 2rem 0;
    font-weight: 700;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  padding: 0 8rem;

  @media (max-width: 1100px) {
    padding: 0 5rem;
  }

  @media (max-width: 1050px) {
    padding: 0 3rem;
  }

  @media (max-width: 1000px) {
    padding: 0;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 8rem;
  }

  @media (max-width: 800px) {
    padding: 0 3rem;
  }

  @media (max-width: 750px) {
    padding: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 5rem;
  }

  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const ViewMore = styled.div`
  margin-top: 4rem;
`;
