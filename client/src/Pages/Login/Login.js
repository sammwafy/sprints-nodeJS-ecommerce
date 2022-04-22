import SignIn from "../../Componenets/Sign-in/SignIn";
import Layout from "../../Componenets/Layout/Layout";
import { Navigate } from "react-router-dom";

const Login = ({ user }) => {
  return (
    <>
      {user?.length > 0 ? (
        <Navigate to="/" replace />
      ) : (
        <Layout>
          <SignIn />
        </Layout>
      )}
    </>
  );
};

export default Login;
