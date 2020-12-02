import React from 'react';


const labs = () => {
    const lab_list = [
        {"filepath": "", "desc": "Some stuff about lab one"},
        {"filepath": "", "desc": "lab two is different"},
        {"filepath": "", "desc": "lab three is easy"}
    ];

    return (
        <div>
            <h1>StochSD Labs</h1>
            <ul>
                {lab_list.map(lab => {
                    return (<li>
                        {lab["desc"]}
                    </li>);
                })}
            </ul>
        </div>
    );
}

export default labs;