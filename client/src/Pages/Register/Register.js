import SignUp from "../../Componenets/Sign-up/Signup.js";
import Layout from "../../Componenets/Layout/Layout";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth.js";

const Register = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth?.username ? (
        <Navigate to="/" replace />
      ) : (
        <Layout>
          <SignUp />
        </Layout>
      )}
    </>
  );
};

export default Register;
