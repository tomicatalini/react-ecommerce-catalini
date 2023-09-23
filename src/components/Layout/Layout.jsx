import Navbar from '../Navbar/Navbar'; 

const Layout = ({children}) => {

    return (
        <>
            <Navbar />
            <main className='p-6'>
                {children}
            </main>
        </>
    )
}

export default Layout;