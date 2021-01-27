import React from 'react'

export default function Footer() {
    return (
        <div className="flex justify-center py-4 px-8 bg-gray-300 text-white">
            <div className="inline-block ml-8">
                <img src="/github.png" width="25" height="25"></img>
            </div>
            <div className="inline-block ml-8">
                <img src="/linkedin.svg" width="25" height="25"></img>
            </div>
        </div>
    )
}