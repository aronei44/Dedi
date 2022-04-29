import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Nav from '../components/Main/Nav'
import Hero from '../components/Main/Hero'
import About from '../components/Main/About'
import Contact from '../components/Main/Contact'
import Carousel from '../components/Main/Carousel'
import { usePage } from '@inertiajs/inertia-react'

export default function Index() {
    const {user} = usePage().props
    return (
        <>
            <Head title="Megamendung" />
            <Nav />
            <Hero />
            <About />
            <Carousel />
            <Contact />
        </>
    )
}
