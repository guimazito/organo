import './TextField.css'
// import { useState } from 'react'

const TextField = (props) => {

    // let value = 'Ola'

    // const [value, setValue] = useState('Claudio')

    const whenTyped = (event) => {
        // setValue(event.target.value)
        props.whenChanged(event.target.value)
        // console.log(value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyped} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField