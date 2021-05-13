import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = ( ) => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar />
        <Navbar />
        </>
    )
}

export default Home
