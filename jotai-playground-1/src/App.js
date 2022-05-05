import { Provider } from "jotai";
import Input from "./components/Input";
import CharCount from "./components/CharCount";
import Uppercase from "./components/Uppercase";

function App() {
  return (
      <Provider>
        <Input />
        <CharCount />
        <Uppercase />
      </Provider>
  );
}

export default App;
