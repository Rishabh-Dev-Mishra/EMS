import React from 'react'

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full h-16 mb-8">
            <h1 className="text-white text-2xl font-medium">
                Hello <span className="block text-3xl font-semibold">Rishabh 👍</span>
            </h1>
            <button className="bg-red-400 text-white px-4 py-2 rounded-md font-medium">
                Log Out
            </button>
        </div>
    )
}

export default Header
