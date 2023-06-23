import { useState } from "react";
import { useGetAllCategory } from "../../../services/Category/services";

function useCategories() {
    const { data: categories, isLoading: isCategoriesLoading } = useGetAllCategory()
    const [selectedCategory, setSelectedCategory] = useState(0)

    function handleSelectCategory(categoryId) {
        setSelectedCategory(categoryId)
    }

    return (
        categories,
        isCategoriesLoading,
        selectedCategory,
        handleSelectCategory
    );
}

export default useCategories;