import Link from 'next/link'

export default function Home() {
    return (
        <div className='bg-slate-900'>
            <h1 className='text-4xl text-center text-white'>Welcome to my page!</h1>
            <p className='text-center text-white'>This is my first Next.js page.</p>
            <a href='/blog' className='text-center text-white'>Blogs</a>
        </div>
    )
}