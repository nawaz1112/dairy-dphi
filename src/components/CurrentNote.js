import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Currentnote({ state, setState }) {
    let { id } = useParams();
    let currentPageData = {};
    for (let i = 0; i < state.length; i++) {
        if (state[i].Id === Number(id)) {
            currentPageData = state[i];
        }
    }

    const [title, setTitle] = useState();
    const [body, setbody] = useState();
    const [edit, setEdit] = useState(false);
    const onEditClick = () => {
        setEdit(true);
    }
    useEffect(() => {
        setTitle(currentPageData.Title);
        setbody(currentPageData.Body)
    }, [])

    function deleteNotes() {
        let newState = state;
        for (let i = 0; i < newState.length; i++) {
            if (newState[i].Id === Number(id)) {
                delete state[i];
            }
        }
        let filtered = newState.filter(function (el) {
            return el != null;
        });
        return filtered;
    }
    const onClickHandler = () => {
        let filtered = deleteNotes();
        setState(filtered);
    }
    
    const onSaveHandler = () => {
        let filtered = deleteNotes();
        if (!title || !body) {
            setState([...state]);
        } else {
            setState([{ Id: Math.round(Math.random() * 10000), Title: title, Body: body, Date: Date() }, ...filtered]);
        }
    }
    return (
        <>
            <div className="container current-note-head mt-5">
                {edit ?
                    <>
                        <Link to="/">
                            <li className="search-bar-item">
                                <button type="button" className="btn btn-success save-btn" onClick={onSaveHandler}><i className="fas fa-save mr-2" style={{ marginRight: "10px" }}></i>Save</button>
                            </li>
                        </Link>

                        <h5>Title</h5>
                        <input value={title} name="title" style={{ padding: "1rem", width: "60%", fontSize: "1rem", marginBottom: "1rem" }} onChange={e => setTitle(e.target.value)} type="text" />
                        <br />
                        <h5>Description</h5>
                        <textarea className="text-area" value={body} onChange={e => setbody(e.target.value)}></textarea>
                    </> :
                    <>
                        <h2>Title</h2>
                        <h4 className="mb-4">{currentPageData.Title}</h4>
                        <h5>Description</h5>
                        <p>{currentPageData.Body}</p>
                    </>
                }
                <button onClick={onEditClick} className="btn btn-primary edit-btn"><i className="fas fa-edit mr-2" style={{ marginRight: "10px" }}></i>Edit</button>
                <Link to="/">
                    <button onClick={onClickHandler} className="btn btn-danger delete-btn"><i className="fas fa-trash-alt" style={{ marginRight: "10px" }}></i>Delete</button>
                </Link>
            </div>
        </>
    )
}
