import { useQuery } from '@tanstack/react-query'
import {
    getProvinces,
    getCities
} from './callers';

export const useGetProvinces = () => {
    return useQuery({
        queryKey: ['provinces'],
        queryFn: () => getProvinces()
    })
}

export const useGetCities = (provinceId) => {
    return useQuery({
        queryKey: ['cities'],
        queryFn: () => getCities(provinceId)
    })
}
