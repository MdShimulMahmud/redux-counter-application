import "./App.css";
import CommonCounter from "./components/CommonCounter";
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

const App = () => {
  return (
    <>
      <Counter />
      <Counter1 />
      <CommonCounter dynamic={false} />
    </>
  );
};

export default App;
