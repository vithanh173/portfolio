import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

function Switch({ theme, onclick }) {
    return (
        <div
            className="fixed right-2 top-5 cursor-pointer"
            onClick={onclick}>
            {theme === "dark" ? (
                <BsMoon className="text-white w-8 h-8" />
            ) : (
                <BsSun className="text-black w-8 h-8" />
            )}
        </div>
    )
}

export default Switch
