import React from 'react'

function Page() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col bg-[#141720] gap-5">
    <div className='flex items-center'>
      <img src="./soon.svg" alt="" />
      <span className="text-[35px] ml-[-10px]">⚡️</span>
    </div>
    <button className='px-2 w-[150px] py-2 bg-[#D3F702] rounded-lg hover:bg-[#d2f702df] transition'>
      <a className='no-underline text-[#11141C] text-base font-medium' href="https://admin.kurlclub.com/">Admin</a>
    </button>
    </div>
  )
}

export default Page