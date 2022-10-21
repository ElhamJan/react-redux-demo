import { BUY_CAKE } from "./cakeTypes";

export default function buyCake(numbers = 1) {
  return {
    type: BUY_CAKE,
    payload: numbers,
  };
}
