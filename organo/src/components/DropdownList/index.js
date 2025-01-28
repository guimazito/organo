import './DropdownList.css'

const DropdownList = (props) => {
    
    // console.log(props.itens)

    return (
        <div className="dropdownlist">
            <label>{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)} required={props.mandatory} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList