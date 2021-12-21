import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ContractContext from './context/ContractContext'
import { Container } from '@chakra-ui/layout'
import ContractSelector from './components/ContractSelector/ContractSelector'
import Title from './components/Title/Title'
import ContractMethods from './components/ContractMethods/ContractMethods'
import ErrorAlert from './components/ErrorAlert/ErrorAlert'
import SideBar from './components/Sidebar/SideBar'
import './App.css'
import WalletDetails from './components/WalletsPaper/WalletDetails'
function App() {
    const contractContext = useContext(ContractContext)

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/ntfdetails" element={<SideBar />} />
                    <Route path="/walletdetails" element={<WalletDetails />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
