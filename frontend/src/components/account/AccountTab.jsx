import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Profile from './Profile'
import UserAccount from './Useraccount'
const AccountTab = () => {
    const {accountTab} = useParams();
    console.log(accountTab)
  return (
    <>
      <Routes>
        <Route path={`/account/:${accountTab}`} element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default AccountTab