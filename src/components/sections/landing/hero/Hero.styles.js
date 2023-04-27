import styled from "styled-components";

import heroImage from "../../../../assets/images/hero.jpg";

export const Container = styled.section`
  display: flex;
  margin-top: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContectSection = styled.div`
  width: 50%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    width: 80%;

    @media (max-width: 1000px) {
      font-size: 3.5rem;
    }

    @media (max-width: 900px) {
      font-size: 3rem;
    }

    @media (max-width: 700px) {
      font-size: 2.8rem;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  p {
    font-size: 1.4rem;
    margin: 3rem 0;
    width: 80%;
    line-height: 1.8;
    letter-spacing: 1px;
    color: ${(props) => props.theme.grey};

    @media (max-width: 800px) {
      font-size: 1.2rem;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  button {
    @media (max-width: 392px) {
      margin-top: 1rem;
    }
  }

  button:not(:last-child) {
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const MediaSection = styled.div`
  width: 50%;

  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    width: 100%;
    height: 35rem;
    margin-top: 3rem;
  }
`;
