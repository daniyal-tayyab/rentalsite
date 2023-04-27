import styled from "styled-components";

import background from "../../../../assets/images/services-background.jpg";

export const Container = styled.section`
  margin-top: 10rem;
`;

export const Cover = styled.div`
  height: 50rem;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.8)
    ),
    url(${background});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  h2 {
    font-size: 3rem;
    word-spacing: 4px;
    text-align: center;
    margin: 2rem 0;

    span {
      display: block;

      @media (max-width: 700px) {
        display: inline;
      }
    }

    @media (max-width: 600px) {
      padding: 0 1rem;
      font-size: 2.8rem;
    }
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    margin-top: 1rem 0;
    line-height: 1.6;

    span {
      display: block;

      @media (max-width: 700px) {
        display: inline;
      }
    }

    @media (max-width: 600px) {
      padding: 0 1rem;
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.span`
  color: ${(props) => props.theme.blue};
  font-size: 1.4rem;
  margin-bottom: 1rem 0;
`;

export const CardContainer = styled.div`
  height: 25rem;
  margin-top: -12rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  padding: 0 10rem;

  @media (max-width: 1100px) {
    padding: 0 8rem;
  }

  @media (max-width: 1000px) {
    padding: 0 6rem;
  }

  @media (max-width: 950px) {
    gap: 3rem;
  }

  @media (max-width: 880px) {
    gap: 2rem;
    padding: 0 4rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem;
    gap: 5rem;
    height: auto;
  }

  @media (max-width: 700px) {
    gap: 3rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 3rem;
    margin-top: -8rem;
  }

  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`;
