import React from 'react'
import Button from './Button'

const SecondaryButton = ({text,onClick}) => {
    return <Button variant="secondary" text={text} onClick={onClick}/>
}
export default SecondaryButton