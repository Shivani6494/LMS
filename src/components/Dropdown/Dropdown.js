import React, { useState } from 'react'
import {FormControl,InputGroup,Dropdown,DropdownButton} from '../../Bootstrapplayer/Bootstrapplayer'

const DropdownWrap = ({title,options,setSelectedValue,name,onChange,value}) => {
  const dropdownText=options.filter(option=>option.id===value)
  console.log('Dropdown text',dropdownText)
    const [newvalue,setValue] = useState((dropdownText[0] || []).name );

    const handleClick = (e) => {
        setValue(e.target.innerText);
        setSelectedValue && setSelectedValue(Number(e.target.id));
        onChange(e.target.name,Number(e.target.id));
      }

    return <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={title}
      id="input-group-dropdown-1"
      
    >
      {
          (options || []).map(options => {
          return <Dropdown.Item name={name} href="#" onClick={(e)=> handleClick(e)} id={options.id} >{options.name}</Dropdown.Item>
          })
      }
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" value={newvalue} />
  </InputGroup>
}

export default DropdownWrap