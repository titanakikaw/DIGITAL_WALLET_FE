import { ArrowPathIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/20/solid'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

const BalanceInquiry =   <div className={`flex justify-center items-center ${'bg-orange-300'} col-span-1 py-2`}><ArrowPathIcon className='h-7  border-sky-100 text-orange-600'></ArrowPathIcon> </div>
const Deposit =   <div className={`flex justify-center items-center ${'bg-green-300'} col-span-1 py-2`}><ArrowTrendingUpIcon className='h-7  border-sky-100 text-green-600'></ArrowTrendingUpIcon> </div>
const Debit =   <div className={`flex justify-center items-center ${'bg-red-300'} col-span-1 py-2`}><ArrowTrendingDownIcon className='h-7  border-sky-100 text-red-600'></ArrowTrendingDownIcon> </div>

const HistoryCard = ({ history }) => {
    return (
        <div className='py-3 px-2 grid grid-cols-6 gap-2 my-1 bg-grayCustom shadow'>         
          
            {
                history?.TransactionType == "Balance Inquiry" && BalanceInquiry ||
                history?.TransactionType == "Deposit" && Deposit ||
                history?.TransactionType == "Debit" && Debit
            }
           
            <div className='col-span-3'>
                <p className='font-extrabold uppercase'>{history?.TransactionType}</p>
                <p className=''>Amount: {(history?.Amount).toLocaleString('en-PH', {
                currency: "PHP",
                style: 'currency',
                })}</p>
            </div>
            <div className='col-span-2'>
                <p className=''>{new Date(history.TransDate).toLocaleDateString("en-US", {  
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            weekday: "short"
                                })
                                }
                </p>
                <p className=''>{
                        new Date(history.TransDate).toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" })
                }
                </p>    
            </div>
        </div>
    )
}

export default HistoryCard