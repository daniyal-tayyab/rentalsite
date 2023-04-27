import styled from "styled-components";

import background from "../../assets/images/footer-background.jpg";

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const ContactSection = styled.div`
  margin: 0 2rem;
  height: 40rem;
  background-image: linear-gradient(
      to right,
      rgba(95, 81, 252, 0.9),
      rgba(95, 81, 252, 0.9)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  margin-bottom: -15rem;
  z-index: 100;
  text-align: center;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;

  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 550px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.4rem;

    @media (max-width: 550px) {
      font-size: 1.3rem;
    }

    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }

  button {
    margin-top: 2.5rem;
    width: 150px;
  }

  @media (max-width: 550px) {
    padding: 0 2rem;
  }

  @media (max-width: 450px) {
    padding: 1rem;
  }

  @media (min-width: 1200px) {
    padding: 10rem;
  }
`;

export const FooterNav = styled.div`
  height: 30rem;
  background-color: ${(props) => props.theme.black};
  display: flex;
`;

export const Nav = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  align-self: flex-end;

  p {
    font-size: 2.5rem;
    cursor: pointer;

    @media (max-width: 500px) {
      margin-bottom: 2rem;
    }
  }

  ul {
    display: flex;

    li {
      margin: 0 1.5rem;
      font-size: 1.4rem;
      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    @media (max-width: 800px) {
      display: none;
    }
  }

  @media (max-width: 600px) {
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SoicalLinks = styled.div`
  display: flex;

  span {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 1px solid #888888;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
