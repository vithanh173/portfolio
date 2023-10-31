import React from 'react'

function TitleSection({ children, id }) {
    return (
        <React.Fragment>
            <h1 id={id && id}
                className="text-3xl font-bold text-sky-500 mb-2">
                {children}
            </h1>
        </React.Fragment>
    )
}

export default TitleSection
