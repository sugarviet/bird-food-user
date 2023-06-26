import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getUserByUserName,
    updateProfile
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





