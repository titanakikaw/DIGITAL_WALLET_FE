import React, { useContext } from 'react'
import { Fragment, useRef, } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DEBIT_ACCOUNT, DEPOSIT_ACCOUNT } from '../actions/walletActions'
import { WalletContext } from '../context/WalletContext'
import { AuthContext } from '../context/AuthContext'
import { StatusContext } from '../context/StatusContext'

const Modal = ({ icon, type, setOpen, open}) => {
    const { account } = useContext(AuthContext)
    const { walletDispatch } = useContext(WalletContext)
    const { status, statusDispatch } = useContext(StatusContext);
    const amountRef = useRef(0);

    const submitTransaction = (type) => {
        switch(type){
            case 'Bal. Inquiry':
    
            case 'Deposit' || 'Cash-in':
                DEPOSIT_ACCOUNT({ id: account.UserID, amount: amountRef.current.value}, statusDispatch)(walletDispatch)
        
                break;
            case 'Debit': 
                DEBIT_ACCOUNT({id: account.UserID, amount: amountRef.current.value}, statusDispatch)(walletDispatch)
                break
        }

        setOpen((x) => {return {...x, open : false}})
    }


    const loading = status.find((x) => x.type == "DEPOSIT" || x.type == "DEBIT" && x?.loading == true);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10"  onClose={() => setOpen((x) => {
                return {...x, open :false}})
            }
            >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="lg:flex">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-baseColor sm:mx-0 sm:h-10 sm:w-10">
                                    {icon}
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex-1">
                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    { type }
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p>Please enter the amount you desire</p>
                                       <input type="number" ref={amountRef} className='p-3 shadow mt-2 w-full text-center' placeholder='Amount'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                disabled={ loading && true } 
                                type="button"
                                className="disabled:cursor-wait disabled:bg-gray-400 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                onClick={() => 
                                    submitTransaction(type)
                                }
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen((x) => {
                                    return {...x, open :false}})}
                                >
                                Cancel
                            </button>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </div>    
        </div>
      </Dialog>
    </Transition.Root>
    )
}

export default Modal