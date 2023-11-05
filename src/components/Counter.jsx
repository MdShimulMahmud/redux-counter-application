import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/action";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <h2 className="text-2xl font-semibold">Static Counter</h2>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={decrementHandler}
        >
          -
        </button>
        <p className="text-xl">{count}</p>
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none"
          onClick={incrementHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
