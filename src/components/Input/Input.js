import React from 'react'
import {InputGroup,FormControl} from '../../Bootstrapplayer/Bootstrapplayer'

const Input = ({type,text,autoFocus,name,onChange,value}) => {
    return (
    <div>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <InputGroup.Text id={`inputGroup-sizing-${text.replace(' ','').toLowerCase()}`}>{text}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label={text}
      aria-describedby={`inputGroup-sizing-${text.toLowerCase()}`}
      id={`inputGroup-${text.toLowerCase()}`}
      autoFocus={autoFocus}
      name={name}
      onChange={onChange}
      value={value}
      type = {type}
    />
  </InputGroup>
  </div>
    )
}

export default Input