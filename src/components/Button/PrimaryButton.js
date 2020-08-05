import React from 'react';
import {Button} from '../../Bootstrapplayer/Bootstrapplayer';

const PrimaryButton = ({text,onClick}) => {
    return <Button variant="primary" onClick={onClick}>{text}</Button>
}
export default PrimaryButton