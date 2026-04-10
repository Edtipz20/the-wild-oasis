/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PublicRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(() => {
    if (isAuthenticated && !isLoading)
      navigate("/dashboard", { replace: true });
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isAuthenticated) return children;
}
export default PublicRoute;
