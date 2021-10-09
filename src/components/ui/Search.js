import React, {useState} from 'react'

const Search =({setQuery})=> {
    const [text, setText] = useState("");

    const updateState =(e)=> {
        setText(e.target.value)
    }

    const updateQuery = (e) => {
        e.preventDefault();
        setQuery(text);
    }

    return (
    
        <section className="class-name">
            <form onSubmit={updateQuery}>
                <input 
                autoFocus 
                placeholder="search character" 
                type="text" 
                className="form-control" 
                value={text}
                onChange={updateState}
                />
            </form>
        </section>
    
    )
}

export default Search
