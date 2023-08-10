import "./App.css";
import Form from "./components/Form";
import { useUser } from "./context/context";

function App() {
  const { state, dispatch } = useUser();

  return (
    <>
      <div>
        <div>App</div>
        <Form handler={dispatch} {...state} />
      </div>
    </>
  );
}

export default App;
