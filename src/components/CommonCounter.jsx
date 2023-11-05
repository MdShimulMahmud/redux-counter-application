import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/action";
import {
  decrement as dynamicDecrement,
  increment as dynamicIncrement,
} from "../redux/dynamicCounter/actions";

const CommonCounter = ({ count, increment, decrement }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <h2 className="text-2xl font-semibold">Common Counter</h2>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={decrement}
        >
          -
        </button>
        <p className="text-xl">{count}</p>
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.count : state.counter.count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? (value) => dispatch(dynamicIncrement(5))
      : () => dispatch(increment()),
    decrement: ownProps.dynamic
      ? (value) => dispatch(dynamicDecrement(5))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonCounter);
