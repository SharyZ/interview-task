import stockService from "@/services/stockService";

export default {
  getAllSunglasses({ commit }) {
    stockService.getAllSunglasses().then((response) => {
      const { status, data } = response;
      if (status === 200) {
        commit("setIsLoading", false);
        commit("setSunglasses", data);
      } else {
        commit("setIsLoading", false);
        commit("setIsError", true);
      }
    });
  },
};
