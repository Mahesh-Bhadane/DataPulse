/* eslint-disable @typescript-eslint/no-explicit-any */
import { QUERY_PARAMS } from "../../shared/types/queryParams";
import get from "../axios-methods/get";

export const getProducts = async (props: QUERY_PARAMS) => {
  try {
    const res = await get(props);

    return res;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
