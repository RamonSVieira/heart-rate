import { FunctionComponent, HTMLAttributes } from 'react';
import iconHeart from '../../../assets/icons/heart.svg'

import { twMerge } from 'tailwind-merge';

const Heart: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={twMerge('', className)} {...props}>
            <img src={iconHeart} alt="" className='w-full'/>
        </div>
    )
}

export default Heart