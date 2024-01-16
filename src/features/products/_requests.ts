import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { SingleProductInterface } from "./_models";

type getProductByIdType = {
  productId: string;
  loadingCb: Dispatch<SetStateAction<boolean>>;
  successCb: Dispatch<SetStateAction<SingleProductInterface | null>>;
};

export async function getProductById(data: getProductByIdType) {
  const { productId, loadingCb, successCb } = data;

  const response = await axios.get(
    `${process.env.API_URL}/products/${productId}`
  );
  const product = await response.data;
  console.log(product);
  successCb(product);
  loadingCb(false);
}
