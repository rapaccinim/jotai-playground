import {useAtom} from "jotai";
import {uppercaseAtom} from "../state/Atoms";

const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom);
    return <div>Uppercase: {uppercase}</div>;
};
export default Uppercase;