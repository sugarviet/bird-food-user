import { useQuery } from '@tanstack/react-query'
import {
    getAllUser,getAllBirdFood
} from './callers';

export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => getAllUser()
    })
}
export const useGetAllBirdFood = () => {
    return useQuery({
        queryKey: ['birds'],
        queryFn: () => getAllBirdFood()
    })
}