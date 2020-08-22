import React, {useState, useEffect} from 'react'
import { Input, DropdownWrap } from '../../../components'

const CreateStudent = ({setnewCity,newCity}) => {
    const [countryId,setCountryId] = useState(newCity.country || 0);
    const [studentcity,setstudentCity] = useState(newCity);

    const country = [
        {id: 1 , name: 'Canada'},
        {id: 2 , name: 'USA'},
        {id: 3 , name: 'India'}
    ]

    const city = [
        { id: 1, countryId: 1, name: 'Toronto' },
        { id: 2, countryId: 1, name: 'Edminton' },
        { id: 3, countryId: 2, name: 'Boston' },
        { id: 4, countryId: 2, name: 'LA' },
        { id: 5, countryId: 3, name: 'Gujarat' }
    ]

    const setSelectedValue = (value) => {
        setCountryId(value)
    }

    useEffect(() => {
        console.log ('studentcity..',studentcity)
        setnewCity(studentcity);
    },[studentcity])

    const setContryObject = (key,value) => {
        // const key = e.target.name;
        // const value = e.target.value;
        setstudentCity({ ...studentcity, [key]: value });
        // console.log ('key',key);
        // console.log ('value',value);
        // console.log('studentcity...',setstudentCity)
        filterCity();
       
    }

    const filterCity = () => {
        // console.log(city);
        return city.filter(city => city.countryId === countryId);
        // console.log(city.filter(city => city.countryId === countryId));
    }

    return <div>
        <Input value={studentcity.firstname} name = "firstname" text="Student Name" autoFocus = {true} onChange={(e)=>setContryObject(e.target.name,e.target.value)}/>
        <Input value={studentcity.lastname} name = "lastname" text="lastname" onChange={(e)=>setContryObject(e.target.name,e.target.value)}/>
        <Input value={studentcity.username} name = "username" text="User Name" onChange={(e)=>setContryObject(e.target.name,e.target.value)}/>
        <Input value={studentcity.password} name = "password" text="PassWord" onChange={(e)=>setContryObject(e.target.name,e.target.value)}/>
        <DropdownWrap value={studentcity.country} name = "country" title = "Country" options={country} setSelectedValue={setSelectedValue} onChange ={ setContryObject}/>
        <DropdownWrap value={studentcity.city} name = "city" title = "City" options = {filterCity()} onChange={(key,value) => setContryObject(key,value) } />
    </div> 
} 
export default CreateStudent