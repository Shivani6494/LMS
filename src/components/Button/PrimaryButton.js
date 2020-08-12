import React from 'react';
import {Button} from '../../Bootstrapplayer/Bootstrapplayer';

const PrimaryButton = ({text,onClick,type,disabled}) => {
    return <Button variant="primary" onClick={onClick} type={type} disabled={disabled} >{text}</Button>
}
export default PrimaryButton