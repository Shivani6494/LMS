import React from 'react';
import {Button} from '../../Bootstrapplayer/Bootstrapplayer';

const ButtonWrap = ({variant,className,text,onClick,type,disabled}) => {
    return <Button variant={variant} className={className} type={type} disabled={disabled} onClick={onClick}>{text}</Button>
}
export default ButtonWrap