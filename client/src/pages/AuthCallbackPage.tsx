import { useCreateUserRequest } from "@/api/myUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateUserRequest();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return (
    <Loader
      size={20}
      className="flex items-center justify-center w-full h-screen animate-spin"
    />
  );
};

export default AuthCallbackPage;
