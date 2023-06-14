import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ArrowTrendingUpIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon, CurrencyDollarIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { AuthContext } from '../context/AuthContext'
import { HistoryContext } from '../context/HistoryContext'
import HistoryCard from '../components/HistoryCard'
import Modal from '../components/Modal'
import { WalletContext } from '../context/WalletContext'
import { LOAD_BALANCE } from '../actions/walletActions'
import DisplayBalance from '../components/displayBalance'
import { LOAD_HISTORY } from '../actions/historyAction'

const Actions = [
  {
    text: "Cash-in",
    icon: <PlusCircleIcon className='h-7 text-orange-500'/>
  },
  {
    text: "Debit",
    icon: <CurrencyDollarIcon className='h-7 text-orange-500'/>
  },
  {
    text: "Bal. Inquiry",
    icon: <ArrowPathIcon className='h-7 text-orange-500'/>
  },
]


const Main = () => {
  const { history, dispatchHistory  } = useContext(HistoryContext)
  const { account } = useContext(AuthContext)
  const [ transaction, setTransaction ] = useState({ open : false});
  const { balance ,walletDispatch } = useContext(WalletContext);

  const createTransaction = useCallback((type) => {
    switch(type){
      case 'Bal. Inquiry':
        setTransaction((prevState) => {
          return {
            ...prevState,
            type: 'Bal. Inquiry',
            icon: <ArrowPathIcon />,
          };
        });
        break;
      case 'Cash-in':
        setTransaction((prevState) => {
          return {
            ...prevState,
            open: true,
            type: 'Deposit',
            icon: <PlusCircleIcon/>,
          };
        });
        break;
      case 'Debit': 
        setTransaction((prevState) => {
          return {
            ...prevState,
            open: true,
            type: 'Debit',
            icon: <CurrencyDollarIcon/>,
          };
        });
        break
    }
  }, [])

  return (
    <div className='' style={{height:'71.9%'}}>
      
        <div className='h-36 flex flex-col justify-center items-center'>
          {
            balance && <DisplayBalance balance={balance} />
          }
          
        </div>
        <div className='h-full px-3 pt-10 bg-white relative rounded'  >
            <div className='grid grid-cols-3 gap-4 p-5 rounded bg-white shadow-md absolute -top-10 left-10 lg:h-full lg:grid-cols-1 lg:w-32 lg:items-center'>
                {
                  Actions.map((x) => {
                    return (
                      <div className='flex flex-col items-center hover:border-l-8 border-baseColor lg:py-5 lg:px-2 rounded  cursor-pointer' key={x.text} onClick={() => createTransaction(x.text)}>
                        {x.icon}
                        <p className='text-xs mt-1'>{x.text}</p>
                      </div>
                    )
                  })
                }
            </div>
            <div className='mt-10 lg:pl-44 lg:mt-0' >
              <p className='font-bold'>Transaction History</p>
              <div className='flex flex-col mt-3 max-h-80 overflow-y-scroll lg:max-h-96'>
                {
                  history && history?.transactionHistory?.map((x, index) => {
                    return(
                      <HistoryCard history={x} key={index}/>
                    )
                  })
                }
              </div>
            </div>
        </div>
        <Modal icon={transaction.icon} type={transaction.type} setOpen={setTransaction} open={transaction.open}/>
    
    </div>
  )
}

export default Main