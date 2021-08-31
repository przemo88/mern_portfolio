import React from 'react';

function Page(props){
    return(
        <div>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{props.github}</div>
        <div>{props.website}</div>
        </div>
    )
}

export default Page;