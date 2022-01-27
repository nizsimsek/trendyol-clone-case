import data from "../data.json";
import { itemActions } from "./item";

export const fetchItemData = () => {
  return async (dispatch) => {
    dispatch(
      itemActions.replaceCart({
        items: data.items || [],
      })
    );
  };
};
