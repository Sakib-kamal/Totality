import { Google } from '@mui/icons-material'
import React from 'react'
import { useEffect } from 'react'

const GoogleLogin = () => {


useEffect(()=>{
    Google.account.id.initialize
})

  return (
    <div>GoogleLogin</div>
  )
}

export default GoogleLogin