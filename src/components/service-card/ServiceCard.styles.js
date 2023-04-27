import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 1.9rem;
  border-radius: 5px;
  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.1);
  border-top: 5px solid ${(props) => props.theme.blue};

  img {
    width: 12rem;
  }

  h4 {
    font-size: 2rem;
    margin: 1.3rem 0;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;
