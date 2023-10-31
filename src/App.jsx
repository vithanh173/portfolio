import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Switch from './components/Switch';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {

    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark").matches) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            window.document.documentElement.classList.add("dark");
        }
        else {
            window.document.documentElement.classList.remove("dark");

        }
    }, [theme])

    const handleSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <React.Fragment>
            <Switch
                theme={theme}
                onclick={handleSwitch} />
            <div className="bg-white dark:bg-slate-900">
                <div className="max-w-5xl mx-auto w-11/12">
                    <HeroSection></HeroSection>
                    <Project></Project>
                    <About></About>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
