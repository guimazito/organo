import './Form.css'
import Button from '../Button'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import { useState } from 'react'

const Form = (props) => {

    const times = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        console.log('Form submitted! :D', name, position, image, team)
        props.toEmployeeRegistered({
            name,
            position,
            image,
            team
        })

        // const names = ['Claudio', 'Joao', 'Maria'];
        // names.forEach(function(name, i){
        //     console.log(name, i);
        // })

        // const animals = ['Elefante', 'Leão', 'Girafa'];
        // animals.forEach(function(animal){
        //     console.log(animal);
        // })
    }

    return (
        <section className="formu">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextField
                    mandatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={position}
                    whenChanged={value => setPosition(value)}
                />
                <TextField
                    mandatory={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <DropdownList
                    mandatory={true}
                    label="Times"
                    itens={times}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form