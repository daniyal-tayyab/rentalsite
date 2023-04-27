import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 1px 3px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  img {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    margin-bottom: 1rem;
    object-fit: cover;
  }
`;

export const PriceContainer = styled.div`
  padding: 3px;
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.grey};
    font-weight: 500;

    span {
      font-size: 1.4rem;
      margin-right: 5px;
    }
  }
`;

export const Title = styled.p`
  text-align: left;
  font-size: 1.7rem;
  font-weight: 700;
  margin: 1rem 0;
`;
