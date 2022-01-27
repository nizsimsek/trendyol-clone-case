import data from "../data.json";
import { categoriesActions } from "./categories";

export const fetchCategoriesData = () => {
  return async (dispatch) => {
    dispatch(
      categoriesActions.getCategories({
        categories: data.categories || [],
      })
    );
  };
};
