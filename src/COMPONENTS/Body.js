import React, { useState } from 'react'
import data from './Data'
import './Body.css'


const Body = () => {
    const [persons, setPersons] = useState(data)
    const [heroes, setHeroes] = useState("CLICK ON YOUR FAVOURITE HERO")
    const [name, setName] = useState("Click On Your Favourite Hero")

    const deleteOne = (mainID) => {
        const filterId = persons.filter(one => {
            return one.id !== mainID
        }) 
        setPersons(filterId)
    }

    const deleteAll = () => {
        setPersons([])
        setName(`Click on "Display All" button for display all heroes`)
        setHeroes(`Click on "Display All" button for display all heroes`)
    }

    const displayAll = () => {
        setPersons(data)
        setHeroes("Click On The Card To Get Info About The Hero ")
        setName("CLICK ON YOUR FAVOURITE HERO ")
    }

  return (
    <div className='header-main'>
        <div className='header'>
            <h3>{name}</h3>     
        </div>
     <div>
        <h3 className='info-bar'>{heroes}</h3>
    </div>
    <div className='box'>
    <div className='container'>
        {   
        persons.map(onePerson => {
            const {id, image, name, info} = onePerson
            return (
                    <div className='text' key={id} onClick={() => (
                        setHeroes(info),
                        setName(name)
                        )} >
                    <img src={image} className="profil" height="300rem" width="150" alt=""></img>
                    <h1>{name}</h1>
                    <button onClick={() => deleteOne(id)}>DELETE</button>
                 </div>
                    )
                })
             }
    </div>
    <div className='buttons'>
            <button onClick={deleteAll}>DELETE ALL</button>
            <button onClick={displayAll}>DISPLAY ALL</button>
    </div>
</div>
</div>
  )
}

export default Body