import { ButtonClickType } from "src/types";
import { testApi } from "./api";

export const onButtonClick: ButtonClickType = async (): Promise<void> => {
  console.log("clicked");
  const response = await testApi();
  console.log(response);
};
