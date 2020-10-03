import React from 'react'

export default function MovieForm({match, history}) {
    return (
        <div>
            <h1>
                ID: {match.params.id}
            </h1>
                <button className="btn btn-primary" onClick={()=> history.push("/movies")}>Save</button>
        </div>
    )
}
