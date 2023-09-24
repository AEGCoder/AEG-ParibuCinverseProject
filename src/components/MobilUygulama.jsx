import React from 'react'

const MobilUygulama = () => {
  return (
    <div className="rounded-3xl h-[275px] bg-[#2E2E2E] flex items-center justify-between px-10 py-10 container mx-auto">
    <div className="flex flex-col items-center justify-around gap-y-10">
      <h1 className="text-3xl font-bold tracking-wider text-white">
        Mobil Uygulamamızı <br /> Keşfedin!
      </h1>
      <div className="flex items-center gap-x-4">
        <img
          src="https://www.paribucineverse.com/assets/img/icons/store/google_play_2x.png"
          alt=""
        />
        <img
          src="https://www.paribucineverse.com/assets/img/icons/store/app_store_2x.png"
          alt=""
        />
      </div>
    </div>
    <div className="flex items-center gap-x-5 mb-6">
      <img
        src="https://www.paribucineverse.com/assets/img/icons/store/new/phone_3x.png"
        alt=""
      />
      <img
        src="https://www.paribucineverse.com/assets/img/icons/store/new/phone_avatar_3x.png"
        alt=""
      />
    </div>
  </div>
  )
}

export default MobilUygulama