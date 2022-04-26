import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

export default function Index() {
    return (
        <>
            <Head title="Index" />
            <Nav />
            <Hero />
        </>
    )
}
