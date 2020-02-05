import { Data, Override } from "framer";

// Data Store
const data = Data({
  count: 0
});

// Override関数
export const Count: Override = () => {
  return {
    count: data.count,
    countUp() {
      data.count += 1;
    }
  };
};
