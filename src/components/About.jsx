import React from 'react'
import TitleSection from './TitleSection'
import about from "../data/about"
import AboutItem from './AboutItem'

function About() {

    console.log(about);

    return (
        <div className="py-12">
            <TitleSection>About Me</TitleSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <img
                        src="https://huggingface.co/tasks/assets/image-classification/image-classification-input.jpeg"
                        alt="Me"
                        className="w-full h-72 object-cover rounded-xl mb-2"
                    />
                    <p className="text-lg text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quod sequi harum at perspiciatis provident ipsa tempore doloribus culpa facere, odio, repellat modi necessitatibus unde aperiam? Architecto quam recusandae accusantium?</p>
                </div>
                <div className="flex flex-col gap-4">
                    {about.map(item => (
                        <AboutItem
                            key={item.id}
                            time={item.time}
                            title={item.title}
                            desc={item.description}
                        ></AboutItem>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
