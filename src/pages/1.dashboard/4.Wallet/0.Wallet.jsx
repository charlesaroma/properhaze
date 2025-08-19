import React from "react";
import WalletTable from "./3.WalletTable";
import BuyConfetti from "./1.BuyConfetti";
import WithdrawConfetti from "./2.WithdrawConfetti";

const Wallet = () => {
  return (
    <div className="flex flex-col gap-8 pt-20 min-h-screen relative">
      <div className="max-w-6xl w-full pt-6 mx-auto px-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">My Wallet</h1>
        </div>

        {/* Summary Card & Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-col gap-4 text-center justify-center">
              {" "}
              <div className="text-2xl font-bold">KES 12,500</div>
              <div className="text-sm opacity-80">Balance</div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-6 w-full">
            <div className="flex-1">
              <BuyConfetti />
            </div>
            <div className="flex-1">
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
