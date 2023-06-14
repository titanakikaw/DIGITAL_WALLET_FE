import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Dropdown = () => {
    const { account, dispatchAccount } = useContext(AuthContext)
    const navigate = useNavigate();
    const LogOut = (e) => {
      e.preventDefault();
      dispatchAccount({
        type : "LOGOUT_SUCCESS"
      })
      navigate('/auth')
    }


    return (
        <Menu as="div" className="relative inline-block text-left h-1 ">
          <div>
            <Menu.Button className="flex items-center px-3 py-1 bg-orange-500 rounded text-white">
                <p className='font-bold capitalize'>{account?.Name}</p>
                <ChevronDownIcon className="-mr-1  w-5 text-gray-400" aria-hidden="true" ></ChevronDownIcon>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="rounded absolute right-0 z-10 mt-2 w-36 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                
                <form method="POST" action="#" onSubmit={(e) => LogOut(e)}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="submit"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-xs'
                        )}
                      >
                        Log out
                      </button>
                    )}
                  </Menu.Item>
                </form>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )
}

export default Dropdown