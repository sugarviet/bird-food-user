import { useMutation } from "@tanstack/react-query";
import { signup } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation(signup, {
    onSuccess: () => {
      notification.success({
        message: "Sign up successfully",
      });
      navigate("/login");
    },
    onError: () => {
      notification.error({
        message: "Sign up failed",
      });
    },
  });
};
