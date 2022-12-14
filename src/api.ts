import { instance } from "./anotherCode/api/instance";

export const testApi = (): Promise<unknown> => {
  return instance.get("/feed", {
    params: {
      start_date: "2015-09-07",
      end_date: "2015-09-08"
    }
  });
};
