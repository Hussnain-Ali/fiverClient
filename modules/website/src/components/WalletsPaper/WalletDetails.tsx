import React, { useState } from 'react'
import { Select } from '@chakra-ui/select'
import { getNetworkName } from '../../utils/getNetworkName'
import { Network } from '../../constants'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { BsSpeedometer2 } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { BsPlayFill } from 'react-icons/bs'
import { MdModeEditOutline } from 'react-icons/md'
import { BsWallet2 } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import ContractContext from '../../context/ContractContext'
const WalletDetails = () => {
    const [formData, updateFormData] = useState([])

    return (
        <div className="main" style={{ overflowX: 'hidden' }}>
            <Row>
                <Col className="p-0" md={2} lg={2}>
                    <div className="sidebar-main">
                        <div className="ms-4 py-4">
                            <div className="sidebar-icon">
                                <div className="side-text  ">
                                    <i>
                                        <BsSpeedometer2 className="d-inline-block " />
                                    </i>
                                    <span className="ps-2"> Buy NFT </span>
                                </div>
                            </div>
                            <div className="sidebar-icon">
                                <div className="side-text">
                                    <i>
                                        <BsSpeedometer2 className="d-inline-block " />
                                    </i>
                                    <Link to="/ntfdetails" className="ps-2">
                                        NFT History
                                    </Link>
                                </div>
                            </div>
                            <div className="sidebar-icon">
                                <div className="side-text">
                                    <i>
                                        <FiSettings className="d-inline-block " />
                                    </i>
                                    <span className="ps-2"> Setting </span>
                                </div>
                            </div>
                            <div className="sidebar-icon">
                                <div className="side-text">
                                    <i>
                                        <BsWallet2 className="d-inline-block " />
                                    </i>
                                    <Link to="/walletdetails" className="ps-2">
                                        Wallet
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col
                    className="p-2 bg-color"
                    style={{ backgroundColor: 'rgb(37, 45, 61)' }}
                    md={6}
                    lg={6}
                >
                    <div>
                        <h3 className="table-heading">Past NFT Purchase</h3>
                        <span className="text-56 m-2 p-1">56</span>
                    </div>
                    <table className="mt-4 w-100">
                        <tr>
                            <th>Coin Name</th>
                            <th>Public Address</th>

                            <th style={{ paddingLeft: '25px' }}>Actions</th>
                        </tr>

                        <tr className="py-3">
                            <td>Bitcoin (BTC)</td>
                            <td>18iQvBc9uksMrsNX7kxiiYsTYV3MLPFeD6</td>

                            <td>
                                <i>
                                    <BsPlayFill className="play-btn text-success" />
                                </i>
                                <i>
                                    <MdModeEditOutline className="play-btn" />
                                </i>
                                <i>
                                    <RiDeleteBin6Line className="play-btn text-danger" />
                                </i>
                            </td>
                        </tr>
                    </table>
                </Col>
                <Col
                    md={4}
                    lg={4}
                    style={{ backgroundColor: 'rgb(37, 45, 61)' }}
                >
                    <form className="form-shape">
                        <div className="form-group ms-2">
                            <label>NETWORK</label>
                            <div>
                                <select
                                    name="cars"
                                    id="cars"
                                    className="form-control"
                                >
                                    <option value="volvo">Bitcoin (BTC)</option>
                                    <option value="saab">Ethereum (ETH)</option>
                                    <option value="opel">
                                        Dogecoin (DOGE)
                                    </option>
                                    <option value="audi">
                                        Worldcoin (WDC)
                                    </option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default WalletDetails
