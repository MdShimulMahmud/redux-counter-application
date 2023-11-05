import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/dynamicCounter/actions";

const Counter1 = () => {
  const count = useSelector((state) => state.dynamicCounter.count);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <h2 className="text-2xl font-semibold">Dynamic Counter</h2>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={() => decrementHandler(3)}
        >
          -
        </button>
        <p className="text-xl">{count}</p>
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none"
          onClick={() => incrementHandler(2)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter1;
