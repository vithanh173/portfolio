import React from 'react'

function AboutItem({ id, time, title, desc }) {
    return (
        <div className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-gray-700 p-5 hover:-translate-y-2 transition rounded-lg">
            <h1 className="font-bold text-2xl text-gray-600 dark:text-gray-300 mb-1">{time}</h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-300">{title}</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
    )
}

export default AboutItem
