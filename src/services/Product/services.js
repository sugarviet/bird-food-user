import { useQuery } from '@tanstack/react-query'
import {
    getAllBirdFood
} from './callers';

export const useGetAllBirdFood = () => {
    return useQuery({
        queryKey: ['birds'],
        queryFn: () => getAllBirdFood(),
    })
}