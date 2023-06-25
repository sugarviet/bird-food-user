import { useQuery } from '@tanstack/react-query'
import {
    getUserById
} from './callers';


export const useGetUserById = (id) => {
    return useQuery({
        queryKey: ['user_id', id],
        queryFn: () => getUserById(id)
    })
}





