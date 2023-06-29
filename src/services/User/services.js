import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import {
    getUserByUserName,
    updateProfile,
    updateSelectedItems
} from './callers';


export const useGetUserByUserName = (username) => {
    return useQuery({
        queryKey: ['user_name', username],
        queryFn: () => getUserByUserName(username)
    })
}

export const useUpdateUserProfile = () => {
    const queryClient = useQueryClient();

    return useMutation(updateProfile, {
      onSuccess: () => {
        notification.success({
          message: "Update successfully",
        });
        queryClient.invalidateQueries('user');
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





