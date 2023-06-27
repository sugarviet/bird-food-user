import { useMutation, useQuery } from "@tanstack/react-query";
import { login } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      notification.success({
        message: "Login successfully",
      });
      navigate("/");
    },
    onError: () => {
      notification.error({
        message: "Login failed",
        description: "Username or password is wrong!",
      });
    },
  });
};
export const useToken = () => {
  const { data: decodedToken } = useQuery({
    queryKey: ["decodedToken"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      if (token) {
        return jwtDecode(token);
      }
    },
  });
  return decodedToken;
};
