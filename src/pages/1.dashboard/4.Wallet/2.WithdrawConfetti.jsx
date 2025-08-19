import React from 'react'

const WithdrawConfetti = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [amount, setAmount] = React.useState(200)
  const [phone, setPhone] = React.useState('700 000 000')
  const presets = [20, 40, 60, 80]
  const balance = 12500
  const commissionRate = 0.2025 // example rate; adjust when integrating backend
  const estTotal = amount + amount * commissionRate

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="py-2 px-6 w-full md:min-h-28 rounded-md bg-transparent text-white text-sm md:text-base font-medium border border-white/70 hover:bg-white/5 transition cursor-pointer"
      >
        Withdraw
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-3 sm:p-4" onClick={() => setIsOpen(false)}>
          <div
            className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute cursor-pointer right-5 top-5 text-gray-600 hover:text-gray-800 text-2xl"
              aria-label="Close"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left form */}
              <div className="p-6 sm:p-10">
                <h2 className="text-3xl font-bold mb-8 text-[var(--color-on-contrast)]">Withdraw</h2>

                <label className="block text-sm mb-2 text-[var(--color-on-contrast)]/80">Enter amount you want to withdraw :</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full h-12 border border-gray-300 rounded-xl px-4 mb-2 text-[var(--color-on-contrast)] placeholder-gray-400"
                />
                <p className="text-xs text-gray-500 mb-4">Balance in your account wallet KES {balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}.</p>

                <div className="flex gap-4 flex-wrap mb-8">
                  {presets.map((v) => (
                    <button
                      key={v}
                      onClick={() => setAmount(Math.round((v / 100) * balance))}
                      className={`h-11 min-w-[96px] px-6 cursor-pointer rounded-xl border border-gray-300 text-[var(--color-on-contrast)] ${
                        Math.round((v / 100) * balance) === amount ? 'bg-white ring-2 ring-[var(--color-black-canvas)]/60 border-transparent' : 'bg-white border-[var(--color-on-contrast)]'
                      } transition`}
                    >
                      {v}%
                    </button>
                  ))}
                </div>

                <div className="mb-2">
                  <label className="block text-sm mb-2 text-[var(--color-on-contrast)]/80">Enter your mobile number :</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-gray-300 rounded-l-xl bg-gray-50 text-gray-600">+254</span>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-12 border border-gray-300 rounded-r-xl px-4 text-[var(--color-on-contrast)] placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Right summary: text top, button bottom full width */}
              <div className="bg-gray-50 p-8 sm:p-10 flex flex-col min-h-[420px]">
                <div className="flex flex-col items-start gap-2">
                  <div className="text-3xl md:text-4xl font-semibold text-[var(--color-on-contrast)] mb-1">KSh {estTotal.toFixed(2)}</div>
                  <div className="text-sm text-gray-600">Total amount with commission. The final</div>
                  <div className="text-sm text-gray-600">amount may differ from the indicated.</div>
                </div>
                <button
                  className="mt-6 h-12 w-full rounded-xl bg-[var(--color-black-canvas)] text-white hover:opacity-90 transition"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WithdrawConfetti