import React from 'react';
import Note from './Note';

const Notes = ({notesData}) => {
    
    return (
        <>
            <section className="timeline_area section_padding_130">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="apland-timeline-area">
                                <div className="single-timeline-area">
                                    <div className="row">
                                        <Note data={notesData} />
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Notes;