import { useDispatch, useSelector } from "react-redux";
import buyIceCream from "../redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecreams -{numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  );
};

export default IceCreamContainer;
