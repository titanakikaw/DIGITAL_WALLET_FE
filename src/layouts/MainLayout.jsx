import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Navbar from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'
import { HistoryProvider } from '../context/HistoryContext'
import { WalletProvider } from '../context/WalletContext'

const MainLayout = () => {
    const { account } = useContext(AuthContext);
 
    const navigate = useNavigate()
    useEffect(() => {
        if(!account){
            navigate('/auth')
        }
    }, [])

    return (

        <WalletProvider>
            <HistoryProvider>
                <div className='bg-baseColor h-screen lg:px-20'>
                    <Navbar/>
                    <Outlet/>
                </div>
            </HistoryProvider>
        </WalletProvider>
     
    )
}

export default MainLayout