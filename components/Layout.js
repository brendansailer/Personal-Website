import React from 'react'
import Nav from './Nav';
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <div className="bg-gray-300">
                {children}
            </div>
            <Footer />
        </div>
    )
}