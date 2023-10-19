import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => {

    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-4rem)] bg-zinc-100'>            
                {children}
            </main>
        </>
    )
}

export default Layout;