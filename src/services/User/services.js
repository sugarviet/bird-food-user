import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
  getUserByUserName,
  updateProfile,
  updateSelectedItems,
  getOrderDone,
  getOrderPending,
  getOrderShipping,
  cancelOrder,
  getOrderCancel,
} from "./callers";

export const useGetUserByUserName = (username) => {
  return useQuery({
    queryKey: ["user_name", username],
    queryFn: () => getUserByUserName(username),
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile, {
    onSuccess: () => {
      notification.success({
        message: "Update successfully",
      });
      queryClient.invalidateQueries("user");
    },
    onError: () => {
      notification.error({
        message: "update fail",
        description: "Server is not responding now",
      });
    },
  });
};

export const useUpdateUserSelectedItems = () => {
  return useMutation(updateSelectedItems, {
    onSuccess: () => {
      // notification.success({
      //   message: "Update successfully",
      // });
      // queryClient.invalidateQueries('user');
    },
    onError: () => {
      // notification.error({
      //   message: "update fail",
      //   description: "Server is not responding now",
      // });
    },
  });
};

export const useGetOrderPending = () => {
  return useQuery({
    queryKey: ["pendings"],
    queryFn: () => getOrderPending(),
  });
};

export const useGetOrderShipping = () => {
  return useQuery({
    queryKey: ["shippings"],
    queryFn: () => getOrderShipping(),
  });
};
export const useGetOrderDone = () => {
  return useQuery({
    queryKey: ["done"],
    queryFn: () => getOrderDone(),
  });
};
export const useGetOrderCancel = () => {
  return useQuery({
    queryKey: ["cancel"],
    queryFn: () => getOrderCancel(),
  });
};
export const useCancelOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(cancelOrder, {
    onSuccess: () => {
      notification.success({
        message: "Request Reject Successfully",
      });
      queryClient.invalidateQueries("shippings");
    },
    onError: () => {
      notification.error({
        message: "Confirmed order failed",
      });
    },
  });
};
