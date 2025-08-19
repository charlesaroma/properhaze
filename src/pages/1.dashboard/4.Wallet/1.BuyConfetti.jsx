import React from 'react'

const BuyConfetti = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [amount, setAmount] = React.useState(200)
  const [paymentOption, setPaymentOption] = React.useState('mpesa')
  const [phone, setPhone] = React.useState('700 000 000')

  const presets = [50, 200, 400, 800]

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="h-32 sm:h-36 w-48 sm:w-56 rounded-3xl bg-white text-[#0E2230] text-xl font-medium shadow-inner border border-white/70 hover:shadow transition cursor-pointer"
      >
        Buy Confetti
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-3 sm:p-4" onClick={() => setIsOpen(false)}>
          <div
            className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 text-xl"
              aria-label="Close"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left form */}
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold mb-8">Deposit</h2>

                <label className="block text-sm mb-2">Enter amount you want to deposit :</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full border rounded-md px-4 py-3 mb-4"
                />

                <div className="flex gap-3 sm:gap-4 flex-wrap mb-8">
                  {presets.map((v) => (
                    <button
                      key={v}
                      onClick={() => setAmount(v)}
                      className={`h-10 min-w-[84px] px-5 rounded-xl border ${amount === v ? 'bg-gray-900 text-white' : 'bg-white'} transition`}
                    >
                      {v}
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-sm mb-3">Choose your preferred payment option :</label>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 bg-gray-50 p-4 sm:p-6 rounded-xl border">
                    {['mpesa', 'airtel', 'equitel'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setPaymentOption(opt)}
                        className={`rounded-xl border p-3 bg-white ${paymentOption === opt ? 'ring-2 ring-gray-900' : ''}`}
                        aria-pressed={paymentOption === opt}
                      >
                        <img src={`/images/${opt}.png`} alt={opt} className="h-8 sm:h-10 mx-auto" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-2">
                  <label className="block text-sm mb-2">Enter your mobile number :</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border rounded-l-md bg-gray-50 text-gray-600">+254</span>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border rounded-r-md px-4 py-3"
                    />
                  </div>
                </div>
              </div>

              {/* Right summary */}
              <div className="bg-gray-50 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-bold mb-2">KES {Number(amount || 0).toFixed(2)}</div>
                  <div className="text-sm text-gray-600">100% FREE.</div>
                  <div className="text-sm text-gray-600">No fee to deposit money to your wallet.</div>
                </div>
                <button
                  className="mt-6 sm:mt-8 h-12 w-full rounded-xl bg-[#0E2230] text-white hover:opacity-90 transition"
                >
                  Top up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BuyConfetti