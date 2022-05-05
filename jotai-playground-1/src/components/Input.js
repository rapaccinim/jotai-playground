import {useAtom} from "jotai";
import {textAtom} from "../state/Atoms";

const Input = () => {
    const [text, setText] = useAtom(textAtom);
    return <input value={text} onChange={(e) => setText(e.target.value)} />;
};
export default Input;