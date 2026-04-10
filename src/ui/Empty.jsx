import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

function Empty({ resourceName }) {
  return <Container>No {resourceName} could be found.</Container>;
}

export default Empty;
