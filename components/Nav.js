  import React from 'react'
import Link from 'next/link';

export default function Nav() {
    return (
        <div className="py-4 px-8 bg-gray-700 text-white flex justify-between">
            <div className="text-xl"><Link href='/'>Brendan Sailer</Link></div>
            <div className="flex">
                <div className="ml-8"><Link href='/blog'>Blog</Link></div>
                <div className="ml-8"><Link href='/projects'>Projects</Link></div>
                <div className="ml-8"><Link href='/about'>About</Link></div>
            </div>
        </div>
    )
}