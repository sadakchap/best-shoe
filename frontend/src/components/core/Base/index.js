import React from 'react'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'

const Base = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Base
