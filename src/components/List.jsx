import React from 'react';
import "./List.css";

const List = ({list}) => {
    return (
        <>
            {list.map((elm, index) => {
                return <div className="list" key={index}>
                    <p>{elm}</p>
                </div>
            })}
        </>
    )
}

export default List;