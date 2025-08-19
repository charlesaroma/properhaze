import React from 'react'
import WalletTable from './3.WalletTable'
import BuyConfetti from './1.BuyConfetti'
import WithdrawConfetti from './2.WithdrawConfetti'

const Wallet = () => {
  return (
    <div className="flex flex-col gap-8 pt-20 min-h-screen relative">
      <div className="max-w-6xl w-full pt-6 mx-auto px-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">My Wallet</h1>
        </div>

        {/* Summary Card & Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-sm opacity-80">Balance</div>
              <div className="text-2xl font-bold">KES 12,500</div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center justify-center"><BuyConfetti /></div>
          <div className="flex items-center justify-center"><WithdrawConfetti /></div>
        </div>

        {/* Wallet Table */}
        <div className="my-8">
          <WalletTable />
        </div>
      </div>
    </div>
  )
}

export default Wallet