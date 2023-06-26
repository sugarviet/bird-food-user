import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    getUserByUserName,
    updatePassword
} from './callers';


export const useGetUserByUserName = (username) => {
    return useQuery({
        queryKey: ['user_name', username],
        queryFn: () => getUserByUserName(username)
    })
}

export const useUpdateUserPassword = () => {
    const queryClient = useQueryClient();
  
    return useMutation(updatePassword, {
      onSuccess: () => {
        notification.success({
          message: "Update password successfully",
        });
        queryClient.invalidateQueries('user');
      },
      onError: () => {
        notification.error({
          message: "change password failed",
          description: "Server is not responding now",
        });
      },
    });
  };





