import React from 'react'
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex justify-center py-4 px-8 bg-gray-300 text-white">
            <div className="inline-block ml-8">
                <Link href="https://www.linkedin.com/in/brendan-sailer"><img src="/linkedin.svg" width="25" height="25"></img></Link>
            </div>
            <div className="inline-block ml-8">
                <Link href="https://www.github.com/brendansailer"><img src="/github.png" width="25" height="25"></img></Link>
            </div>
        </div>
    )
}