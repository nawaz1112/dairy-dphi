import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Createnote({ state, setState }) {

    const [title, setTitle] = useState();
    const [body, setbody] = useState();

    const onClickHandler = () => {
        if (!title || !body) {
            setState([...state]);
        } else {
            setState([{ Id: Math.round(Math.random() * 10000), Title: title, Body: body,Date:Date() }, ...state]);
        }
    }

    return (
        <>
            <div className="container">
                <ul className="search-bar">
                    <li className="search-bar-item ">Notes</li>
                    <Link to="/">
                        <li className="search-bar-item">
                            <button type="button" className="btn btn-primary" onClick={onClickHandler}><i className="fas fa-save mr-2" style={{ marginRight: "10px" }}></i>Save</button>
                        </li>
                    </Link>

                </ul>
                <hr />
                <h5>Title</h5>
                <input value={title} name="title" style={{ padding: "1rem", width: "60%", fontSize: "1rem", marginBottom: "1rem" }} onChange={e => setTitle(e.target.value)} type="text" />
                <br />
                <h5>Description</h5>
                <textarea className="text-area" value={body} onChange={e => setbody(e.target.value)}></textarea>
            </div>
        </>
    )
}

export default Createnote