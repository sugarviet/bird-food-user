import { useMutation } from "@tanstack/react-query";
import { logout } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const navigate = useNavigate();
  return useMutation(logout, {
    onSuccess: () => {
      // localStorage.setItem("token", data.token);
      notification.success({
        message: "Logout successfully",
      });
      navigate("/login");
    },
    onError: () => {
      notification.error({
        message: "Logout failed",
      });
    },
  });
};