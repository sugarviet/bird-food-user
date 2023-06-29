import { useMutation } from "@tanstack/react-query";
import { checkout } from "./callers";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const navigate = useNavigate();
  return useMutation(checkout, {
    onSuccess: () => {
      notification.success({
        message: "Checkout Added",
        description: "The checkout has been added successfully.",
      });
      navigate('/');
    },
    onError: () => {
      notification.error({
        message: "Checkout failed",
      });
    },
  });
};
