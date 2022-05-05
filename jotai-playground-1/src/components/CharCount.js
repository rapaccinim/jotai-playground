import {useAtom} from "jotai";
import {textLenAtom} from "../state/Atoms";

const CharCount = () => {
    const [len] = useAtom(textLenAtom);
    return <div>Length: {len}</div>;
};
export default CharCount;