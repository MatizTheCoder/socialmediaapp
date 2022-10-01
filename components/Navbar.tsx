import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { createOrGetUser } from '../utils/'
import { AiOutlineLogout } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'
import { GoogleLogin, googleLogout} from '@react-oauth/google'
import Logo from '../utils/tiktik-logo.png'

import userAuthStore from '../store/authStore'



const Navbar = () => {


const { userProfile, addUser } = userAuthStore()

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
        <Link href="/">
          <div className='w-[100px] md:w-[130px]'>
            <Image
              className='curso-pointer'
              src={Logo}
              alt="TitkTik"
              layout='responsive'
            />
          </div>
        </Link>

        <div>
          SEARCH
        </div>

        <div>
          {userProfile ? (
            <div>
              {userProfile.userName}
            </div>
          ): (
            <GoogleLogin 
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log('Error')}
            />
          )}
        </div>
    </div>
  )
}

export default Navbar