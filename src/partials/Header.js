import React from 'react'

function Header() {
    return (
            <nav className="py-20 flex justify-center text-2xl text-white bg-red-900">
                <i className="fas fa-drumstick-bite text-4xl"></i>
                <div id="logo" className="ml-2 font-bold">Recipes</div>
            </nav>
    )
}

export default Header
