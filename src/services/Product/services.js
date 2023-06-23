import { useQuery } from '@tanstack/react-query'
import {
    getAllBirdFood, getBirdFoodById, getAllBirdFoodByCategory
} from './callers';

export const useGetAllBirdFood = () => {
    return useQuery({
        queryKey: ['bird-foods'],
        queryFn: () => sleep(1000).then(() => getAllBirdFood()),
    })
}

export const useGetAllBirdFoodByCategory = ({categoryName, page}) => {
    return useQuery({
        queryKey: ['bird-foods-by-category'],
        queryFn: () => sleep(1000).then(() => getAllBirdFoodByCategory(categoryName, page)),
    })
} 

export const useGetBirdFoodById = (id) => {
    return useQuery({
        queryKey: ['bird_food_by_id', id],
        queryFn: () => getBirdFoodById(id)
    })
}
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};






