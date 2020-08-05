import React from 'react';
import {Button} from '../../Bootstrapplayer/Bootstrapplayer';

const ButtonWrap = ({variant,className,text,onClick}) => {
    return <Button variant={variant} className={className} onClick={onClick}>{text}</Button>
}
export default ButtonWrap