import { sunglassesData } from "@/fakeDb";

const stockService = {
  getAllSunglasses() {
    return new Promise((resolve) => {
      setTimeout(resolve({ status: 200, data: sunglassesData }), 3500);
    });
  },
  getSunglassesById(id) {
    let singleSunglasses = {};

    sunglassesData.map((item) => {
      if (item.id === id) {
        singleSunglasses = { ...item };
      }
    });

    return singleSunglasses;
  },
};

export default stockService;
