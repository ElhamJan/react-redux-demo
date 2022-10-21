import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../redux/cake/cakeActions";

const CakeWithPayload = () => {
  const [numbers, setNumbers] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes -{numOfCakes}</h2>
      <input type="text" value={numbers} onChange={(e)=>setNumbers(e.target.value)} />
      <button onClick={() => dispatch(buyCake(numbers))}>Buy {numbers} cake</button>
    </div>
  );
};

export default CakeWithPayload;
