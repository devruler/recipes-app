import React, {useState} from 'react'

function Hero({search}) {

    const [searchText, setSearchText] = useState('')

    return (
        <div className="py-10 flex justify-center">
            <form className="w-full max-w-sm" onSubmit={(e) => {e.preventDefault(); search(searchText);}}>
                <div className="flex items-center border-b border-red-900 py-2">
                    <input onChange={(e) => setSearchText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
                    <button type="submit" className="flex-shrink-0 bg-red-900 hover:bg-red-700 border-red-900 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Hero
