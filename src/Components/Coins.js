import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Coin.css'

const Coin = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null

    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className='right'>
                <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data[11].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[11].name}</h5>
                            <p>${data[11].current_price.toLocaleString()}</p>
                        </div>

                        {data[11].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[11].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[11].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[12].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[12].name}</h5>
                            <p>${data[12].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[12].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[12].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[13].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[13].name}</h5>
                            <p>${data[13].current_price.toLocaleString()}</p>
                        </div>

                        {data[13].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[13].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[13].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[14].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[14].name}</h5>
                            <p>${data[14].current_price.toLocaleString()}</p>
                        </div>

                        {data[14].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[14].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[14].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[16].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[16].name}</h5>
                            <p>${data[16].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[16].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[16].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[18].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[18].name}</h5>
                            <p>${data[18].current_price.toLocaleString()}</p>
                        </div>

                        {data[18].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[18].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[18].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                   
                </div>

                {/* Right */}

                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data[6].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[6].name}</h5>
                            <p>${data[6].current_price.toLocaleString()}</p>
                        </div>

                        {data[6].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[6].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[6].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[7].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[7].name}</h5>
                            <p>${data[7].current_price.toLocaleString()}</p>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[7].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[7].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[8].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[8].name}</h5>
                            <p>${data[8].current_price.toLocaleString()}</p>
                        </div>

                        {data[8].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[8].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[9].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[9].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[9].name}</h5>
                            <p>${data[9].current_price.toLocaleString()}</p>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[9].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[9].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[10].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[10].name}</h5>
                            <p>${data[10].current_price.toLocaleString()}</p>
                        </div>

                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[10].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[10].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[5].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[5].name}</h5>
                            <p>${data[5].current_price.toLocaleString()}</p>
                        </div>

                        {data[5].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[5].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[5].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Coin
