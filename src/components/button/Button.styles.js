import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem 1.5rem;
  border: ${(props) =>
    props.type === "border" ? "1px solid #000" : "1px solid transparent"};
  border-radius: ${(props) => (props.type === "black" ? "1rem" : "0")};

  cursor: pointer;

  background-color: ${(props) =>
    props.type === "black"
      ? "#000"
      : props.type === "primary"
      ? "#000"
      : "#fff"};

  color: ${(props) =>
    props.type === "black" || props.type === "primary" ? "#fff" : "#000"};
  border: ${(props) => (props.type === "inverted" ? "1px solid #000" : "")};

  transition: all 0.2s;

  margin-top: ${(props) => (props.type === "black" ? "5px" : "")};

  &:hover {
    color: ${(props) =>
      props.type === "black" || props.type === "primary" ? "#000" : "#fff"};
    background-color: ${(props) =>
      props.type === "black" || props.type === "primary" ? "#fff" : "#000"};
    border: ${(props) =>
      props.type === "black" || props.type === "primary"
        ? "1px solid #000"
        : "1px solid transparent"};
  }
`;
