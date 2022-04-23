import SignIn from "../../Componenets/Sign-in/SignIn";
import Layout from "../../Componenets/Layout/Layout";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth.js";

const Login = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
    <>
      {auth?.username ? (
        <Navigate to="/" state={{ from: location }} replace />
      ) : (
        <Layout>
          <SignIn />
        </Layout>
      )}
    </>
  );
};

export default Login;
