import React, { useState } from 'react';
import "./App.css";
import List from './components/List';

const App = () => {

    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    function formRefreshHandler(e){
        e.preventDefault();
        setList([...list, todo]);
        setTodo("");
    }

    function allClear(){
        setList([]);
    }
    
    return (
        <>
            <section>
                <div className="todo">
                    <form className="todo-input" onSubmit={formRefreshHandler}>
                        <input type="text"
                            value={todo} 
                            placeholder='Enter Todo' 
                            onChange={(e) => setTodo(e.target.value)}
                        />
                        <button><i className="fa-solid fa-plus"></i></button>
                    </form>

                    <div className="todo-list">
                        <List list={list} />
                    </div>

                    <button className='all-clear' onClick={allClear}>Clear</button>
                </div>
            </section>
        </>
    )
}

export default App;