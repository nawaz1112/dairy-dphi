import React from 'react'
import './../index.css'
import { Link } from 'react-router-dom'

export default function Topbar(props) {


    return (
        <>
            <nav>
                <div className="logo">
                    <Link className="logo-link" to="/">
                        Dairy/Journal
                    </Link>
                </div>
                <Link className="logo-link logo" to="/">
                        <div className="btn btn-light">
                            Home
                        </div>
                </Link>
            </nav>
        </>
    )
}
