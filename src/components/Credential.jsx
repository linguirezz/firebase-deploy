// import React from 'react'

function Credential({onChange,label,placeHolder,type}) {

  return (
    <div className='flex flex-col '>
          <label className='self-start capitalize ' htmlFor='email'>{label}</label>
          <input className="border border-slate-500 p-2" name={label} type={type} placeholder={placeHolder} onChange={onChange}></input>
        </div>
  )
}

export default Credential