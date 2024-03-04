import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FunctionComponent, HTMLAttributes } from "react";

import { twMerge } from 'tailwind-merge';

interface BpmProps extends HTMLAttributes<HTMLDivElement> {
    num: number;
}

const Bpm: FunctionComponent<BpmProps> = ({ num, className, ...props }) => {
    const combinedClasses = twMerge("flex gap-2 items-center border-2 border-black px-10 py-4 rounded-xl", className);

    return(
        <div className={combinedClasses} {...props}>
            <FontAwesomeIcon icon={faHeartPulse} className="text-3xl"/>
            <p className="text-xl font-bold">BPM: {num}</p>
        </div>
    );
}

export default Bpm;