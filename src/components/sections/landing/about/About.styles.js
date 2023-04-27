import styled from "styled-components";

import about from "../../../../assets/images/about-us.jpg";

export const Container = styled.section`
  padding: 0 5rem;
  margin-top: 10rem;
  display: flex;
  column-gap: 4rem;

  @media (max-width: 900px) {
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const MediaSection = styled.div`
  width: 50%;
  height: 35rem;
  background-image: url(${about});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: pink;

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ContentSection = styled.div`
  width: 50%;
  align-self: center;

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme.blue};
  }

  h2 {
    font-size: 2.5rem;
    margin: 2rem 0;

    @media (max-width: 900px) {
      margin: 1rem 0;
    }

    @media (max-width: 770px) {
      font-size: 2.3rem;
    }
  }

  p {
    line-height: 1.8;
    font-size: 1.4rem;
    color: ${(props) => props.theme.grey};
    margin: 1rem 0;

    @media (max-width: 900px) {
      line-height: 1.6;
    }

    @media (max-width: 770px) {
      font-size: 1.2rem;
    }
  }

  button {
    margin: 2rem 0;

    @media (max-width: 900px) {
      margin: 1rem 0;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
