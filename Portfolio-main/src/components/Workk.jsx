import React, { useState } from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';

function Work({ darkMode }) {
    const projects = [
        { type: 'Website', image: proj1 },
        { type: 'UI/UX Design', image: proj2 },
        { type: 'App Development', image: proj3 },
        { type: 'Website', image: proj4 },
    ];

    const categories = ['Website', 'UI/UX Design', 'Data Analyis'];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = projects.filter((project) => {
        if (selectedCategory === 'All') return true;
        return project.type === selectedCategory;
    });

    return (
        <div id='work' className="bg-[#232325] px-6 lg:px-20 py-10">
            <h2 className="text-2xl lg:text-3xl text-white mb-5">
                My <span>Projects</span>
            </h2>
            <div className="flex justify-center mb-5">
                <div className="flex flex-wrap justify-center space-x-2">
                    <button
                        onClick={() => handleCategoryClick('All')}
                        className={`text-gray-500 ${selectedCategory === 'All' ? 'text-blue-500' : ''} hover:text-white focus:outline-none border ${darkMode ? 'border-white' : 'border-gray-500'} rounded-md transition duration-300 ease-in-out hover:bg-[#FF44EC] py-2 px-4 sm:py-2 sm:px-6`}
                        style={{ margin: '0.25rem' }}
                    >
                        All
                    </button>
                    {categories.map((category, index) => (
                        <button
                            onClick={() => handleCategoryClick(category)}
                            className={`text-gray-500 ${selectedCategory === category ? 'text-blue-500' : ''} hover:text-white focus:outline-none border ${darkMode ? 'border-white' : 'border-gray-500'} rounded-md transition duration-300 ease-in-out hover:bg-[#FF44EC] py-2 px-4 sm:py-2 sm:px-6`}
                            key={index}
                            style={{ margin: '0.25rem' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                    <div
                        onClick={() => handleCategoryClick(project.type)}
                        className="group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        key={index}
                    >
                        <a href='/'>
                            <img src={project.image} alt='' className="w-full h-auto object-cover object-center transition duration-200 group-hover:scale-105" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;
