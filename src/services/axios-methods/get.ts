/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

import axios from "axios";
import { QUERY_PARAMS } from "../../shared/types/queryParams";

const get = async (props: QUERY_PARAMS) => {
  const { page = 1, searchParams = "", limit = 10 } = props;

  try {
    const skip = (page - 1) * limit || 0;

    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchParams}&limit=${limit}&skip=${skip}&select=id,title,price,brand,stock`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { data, status } = response;

    return { data, status };
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export default get;
