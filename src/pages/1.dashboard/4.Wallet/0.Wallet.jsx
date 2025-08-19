import React from "react";
import WalletTable from "./3.WalletTable";
import BuyConfetti from "./1.BuyConfetti";
import WithdrawConfetti from "./2.WithdrawConfetti";

const Wallet = () => {
  return (
    <div className="flex flex-col gap-8 pt-20 min-h-screen relative">
      <div className="max-w-6xl w-full h-full pt-6 mx-auto px-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold my-4 tracking-tight">
            My Wallet
          </h1>
        </div>

        {/* Summary Card & Actions */}
        <div className="w-full h-full flex flex-col md:flex-row gap-4"> 
          {/* Summary Card */}
          <div className="min-h-24 md:min-h-28 md:w-72 flex flex-col items-center justify-center rounded-md border border-white/10 bg-white/5  backdrop-blur-sm">
            <span className="text-xl font-bold text-center">KES 12,500</span>
            <span className="text-sm opacity-80">Balance</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row md:gap-2 items-center">
            <div className="w-full">
              <BuyConfetti />
            </div>
            <div className="w-full">
              <WithdrawConfetti />
            </div>
          </div>
        </div>

        {/* Wallet Table */}
        <div className="my-8">
          <WalletTable />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
