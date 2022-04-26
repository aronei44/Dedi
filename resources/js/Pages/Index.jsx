import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Nav from '../components/Main/Nav'
import Hero from '../components/Main/Hero'
import About from '../components/Main/About'
import Contact from '../components/Main/Contact'

export default function Index() {
    return (
        <>
            <Head title="Megamendung" />
            <Nav />
            <Hero />
            <About />
            <Contact />
        </>
    )
}
