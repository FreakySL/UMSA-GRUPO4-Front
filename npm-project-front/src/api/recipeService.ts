import { NewRecipe } from "../models/NewRecipe";
import apiClient from "./apiClient";

export const createRecipe = async (newRecipe: NewRecipe ): Promise<NewRecipe> => {
    try {
      const response = await apiClient.post(`/Recipe/Create`, newRecipe);
      return response.data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
};