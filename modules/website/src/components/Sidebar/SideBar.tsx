import React, { useContext } from 'react'
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

const SideBar = () => {
    const { chainId, setChainId } = useContext(ContractContext)

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
                            <th>Name</th>
                            <th>Type</th>
                            <th>Currency</th>
                            <th>Profile</th>
                            <th>Status</th>
                            <th style={{ paddingLeft: '25px' }}>Actions</th>
                            {/* <th>asd</th> */}
                        </tr>

                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                        <tr className="py-3">
                            <td>NTF name</td>
                            <td>Buy</td>
                            <td>ETH</td>
                            <td>Clifford</td>
                            <td>
                                <div className="table-btn">Checked out</div>
                            </td>
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
                            <label>JSON RPC PROVIDER URL</label>
                            <input
                                className="form-control input"
                                id="exampleInputEmail1"
                                placeholder="Enter JSON RPC PROVIDER URL"
                            />
                        </div>
                        <div className="form-group ms-2">
                            <label>NETWORK</label>
                            <div>
                                <Select
                                    placeholder="Select a network"
                                    value={chainId}
                                    onChange={(e) =>
                                        setChainId(
                                            Number(e.target.value) as Network
                                        )
                                    }
                                >
                                    <option value={Network.Mainnet}>
                                        {getNetworkName(Network.Mainnet)}
                                    </option>
                                    <option value={Network.Goerli}>
                                        {getNetworkName(Network.Goerli)}
                                    </option>
                                </Select>
                            </div>
                        </div>
                        <div className="form-group ms-2">
                            <label>CONTRACT ADDRESS</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter contract adddress"
                            />
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

export default SideBar
