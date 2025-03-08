import './DropdownList.css'

const DropdownList = (props) => {
    
    return (
        <div className="dropdownlist">
            <label>{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)} required={props.mandatory} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList