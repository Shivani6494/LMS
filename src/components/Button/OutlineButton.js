import React from 'react';
import Button from './Button';

const OutlineButton = ({text,onClick}) => {
    return <Button variant="outline-light" type={text} onClick={onClick}/>
}
export default OutlineButton