import React from 'react'; // This imports the React library, making React.useState available

const BuyConfetti = () => {
  const [isOpen, setIsOpen] = React.useState(false); 
  const [amount, setAmount] = React.useState(200);
  const [paymentOption, setPaymentOption] = React.useState('mpesa');
  const [phone, setPhone] = React.useState('700 000 000');

  const presets = [50, 200, 400, 800];

  // Helper function to convert numbers to words (handles up to 999,999)
  const numberToWords = (num) => {
    if (num === 0) return 'Zero';
    if (num < 0) return 'Minus ' + numberToWords(Math.abs(num));

    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convertChunk = (n) => {
      let s = '';
      if (Math.floor(n / 100) > 0) {
        s += units[Math.floor(n / 100)] + ' Hundred ';
        n %= 100;
      }
      if (n >= 10 && n <= 19) {
        s += teens[n - 10];
      } else if (n >= 20 || n < 10) {
        s += tens[Math.floor(n / 10)];
        if (Math.floor(n / 10) && (Math.floor(n % 10) > 0)) { 
          s += '-';
        }
        s += units[Math.floor(n % 10)];
      }
      return s.trim();
    };

    let words = '';
    let numStr = String(num);

    if (numStr.length > 6) return 'Amount too large for words'; 

    const groups = [];
    while (numStr.length > 0) {
      groups.unshift(numStr.slice(-3));
      numStr = numStr.slice(0, -3);
    }

    const suffixes = ['', 'Thousand', 'Million']; 

    for (let i = 0; i < groups.length; i++) {
      const chunk = parseInt(groups[i], 10);
      if (chunk > 0) {
        let chunkWords = convertChunk(chunk);
        if (i < groups.length - 1) { 
          chunkWords += ' ' + suffixes[groups.length - 1 - i];
        }
        words += chunkWords + ' ';
      }
    }

    return words.trim() + ' Shillings';
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          console.log('Opening modal');
        }}
        className="py-2 px-6 md:min-h-28 rounded-md bg-white text-[var(--color-on-contrast)] text-sm md:text-base font-medium shadow-inner border border-white/70 hover:bg-white/80 transition cursor-pointer"
      >
        Buy Confetti
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-0 sm:p-4" 
          onClick={() => {
            setIsOpen(false);
            console.log('Closing modal (overlay)');
          }}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header close */}
            <button
              onClick={() => {
                setIsOpen(false);
                console.log('Closing modal (button)');
              }}
              className="absolute cursor-pointer right-5 top-5 text-gray-600 hover:text-gray-800 text-2xl"
              aria-label="Close"
            >
              ×
            </button>

            {/* Main content grid for side-by-side layout */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left form section */}
              <div className="p-6 sm:p-10">
                <h2 className="text-3xl font-bold mb-10 text-[var(--color-on-contrast)]">Deposit</h2>

                <label className="block text-sm mb-2 text-[var(--color-on-contrast)]/80">Enter amount you want to deposit :</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value) || 0)}
                  className="w-full h-12 border border-gray-300 rounded-xl px-4 mb-4 text-[var(--color-on-contrast)] placeholder-gray-400"
                />

                <div className="flex gap-4 flex-wrap mb-10">
                  {presets.map((v) => (
                    <button
                      key={v}
                      onClick={() => setAmount(v)}
                      className={`h-11 min-w-[96px] px-6 cursor-pointer rounded-xl border border-gray-300 text-[var(--color-on-contrast)] ${
                        amount === v ? 'bg-white ring-2 ring-[var(--color-black-canvas)]/60 border-transparent' : 'bg-white border-[var(--color-on-contrast)]'
                      } transition`}
                    >
                      {v}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <label className="block text-sm mb-3 text-[var(--color-on-contrast)]/80">Choose your preferred payment option :</label>
                  <div className="grid grid-cols-3 gap-4 bg-gray-50 p-5 border-gray-200">
                    {[
                      { key: 'mpesa', src: '/images/mpesa-logo.png', alt: 'M-Pesa' },
                      { key: 'airtel', src: '/images/airtel-logo.png', alt: 'Airtel Money' },
                      { key: 'equitel', src: '/images/equitel-logo.png', alt: 'Equitel' },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setPaymentOption(opt.key)}
                        className={`rounded-xl cursor-pointer border border-gray-300 p-3 bg-white h-16 flex items-center justify-center ${paymentOption === opt.key ? 'ring-2 ring-gray-500' : ''}`}
                        aria-pressed={paymentOption === opt.key}
                      >
                        <img src={opt.src} alt={opt.alt} className="h-7 sm:h-8 object-contain" />
                      </button>
                    ))}
                  </div>
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
                <div className="flex flex-col items-start gap-2 mt-auto">
                  <div className="text-3xl md:text-4xl font-semibold text-[var(--color-on-contrast)]">KES {Number(amount || 0).toFixed(2)}</div>
                  <div className="text-sm text-gray-600">100% FREE.</div>
                  <div className="text-sm text-gray-600">No fee to deposit money to your wallet.</div>
                  <div className="text-sm text-gray-700 font-medium">{numberToWords(amount)}</div>
                </div>
                <button className="mt-6 h-12 w-full rounded-xl bg-[var(--color-black-canvas)] text-white hover:opacity-90 transition">
                  Top up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuyConfetti;
