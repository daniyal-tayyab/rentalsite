import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 1.2rem 1rem;
  border: 1px solid transparent;

  transition: all 0.2s;

  p {
    font-size: 1.3rem;
    margin-left: 5px;
    color: ${(props) => props.theme.grey};
    margin-left: 10px;
    transition: all 0.2s;
  }

  &:hover {
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
  }

  &:hover p {
    font-weight: 500;
  }
`;
