import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Note({ data }) {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    let mynotes = data;
    if(selected ===""){
    }else if(selected ==="Year"){
        mynotes.sort(byDate);
    }else if(selected ==="Month" || selected ==="Week"){
        mynotes.sort(byDaymonth);
    }
    function byDate(a, b) {
        return new Date(a.Date).valueOf() - new Date(b.Date).valueOf(); 
    }
    function byDaymonth(a, b) {
        let d1 = new Date(a.Date);
        let d2 = new Date(b.Date);
        if (d1.getUTCMonth() > d2.getUTCMonth()) {
            return 1;
        } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
            return -1;
        } else {
            return d1.getUTCDate() - d2.getUTCDate();
        }
    }
    return (
        <>
            <>
                <ul className="search-bar">
                    <li className="search-bar-item ">Notes</li>
                    <Link to="/note">
                        <li className="search-bar-item">
                            <button type="button" className="btn btn-success"><i className="fas fa-edit mr-2" style={{ marginRight: "10px" }}></i>Write Notes</button>
                        </li>
                    </Link>
                    <li className="search-bar-item" 
                    value={selected}
                    onChange={(e)=>{
                        let selectedsorttype = e.target.value;
                        setSelected(selectedsorttype)
                    }}>
                        <select className="custom-select">
                            <option value="">Sort by</option>
                            <option value="Year">Year</option>
                            <option value="Month">Month</option>
                            <option value="Week">Week</option>
                        </select>
                    </li>
                    <li className="search-bar-item">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search by title" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">Search</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
            <div className="container">
                <hr />
            </div>
            {
                mynotes.filter((ele) => {
                    if (search == "") {
                        return ele;
                    } else if (ele.Title.toLowerCase().includes(search.toLowerCase())) {
                        return ele;
                    }
                }).map(ele => {
                    return (
                        <Link to={`/note/${ele.Id}`} key={ele.Id} className="col-12 col-md-6 card-head col-lg-4">
                            <div className="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.3s", animationName: "fadeInLeft"
                                }}>
                                <div className="timeline-text">
                                    <h6>{ele.Title}</h6>
                                    <p>{ele.Body.substring(0, 60)}</p>
                                    <p><small>{ele.Date.substring(0, 15)}</small></p>
                                </div>
                            </div>
                        </Link>
                    );
                })
            }
        </>
    )
}
