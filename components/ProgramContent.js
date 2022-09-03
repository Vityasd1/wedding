import React from 'react';

export const ProgramContent = ({time,program,location}) => {
    return (
        <div className="col-span-2 text-center content-start">
            <p className="text-3xl font-semibold italic">{time}</p>
            <p className="text-3xl">{program}</p>
            <p className="text-3xl">{location}</p>
        </div>
    );
};


