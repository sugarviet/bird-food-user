import { useQuery } from '@tanstack/react-query'
import {
    getAllBirdFood, getBirdFoodById
} from './callers';

export const useGetAllBirdFood = () => {
    return useQuery({
        queryKey: ['birds'],
        queryFn: () => getAllBirdFood(),
    })
}

export const useGetBirdFoodById = (id) => {
    return useQuery({
        queryKey: ['bird_food_by_id', id],
        queryFn: () => getBirdFoodById(id)
    })
}