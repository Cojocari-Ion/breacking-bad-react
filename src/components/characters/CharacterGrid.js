import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid =({isloading, items})=> {
    return isloading? (<h1>Loading...</h1>) : (
        <section className="cards">
            {items.map((item)=> (
                <CharacterItem item={item} key={item.char_id} />
            ))}
        </section>
    )
}

export default CharacterGrid
