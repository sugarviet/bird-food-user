import { useQuery } from '@tanstack/react-query'
import {
    getAllBirdFood, getBirdFoodById
} from './callers';

export const useGetAllBirdFood = () => {
    return useQuery({
        queryKey: ['birds'],
        queryFn: () => getAllBirdFood()
    })
}

export const useGetBirdFoodById = (id) => {
    return useQuery({
        queryKey: ['test', id],
        queryFn: () => getBirdFoodById(id)
    })
}