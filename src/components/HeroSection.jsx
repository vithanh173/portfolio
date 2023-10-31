import React from 'react'

function HeroSection() {
    return (
        <div id="hero" className="py-20 flex flex-col items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-sky-500 font-bold">Hi, This is Me</h1>
                <p className="text-base md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab adipisci quo alias quidem deserunt officia tempora accusantium iusto, ipsa perspiciatis dicta enim, numquam natus est quae commodi ex quas.</p>
                <a href="#project" className="inline-block px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:text-base">See Works</a>
            </div>
        </div>
    )
}

export default HeroSection
