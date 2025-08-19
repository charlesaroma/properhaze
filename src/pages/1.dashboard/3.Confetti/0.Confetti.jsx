import ConfettiTable from "./2.ConfettiTable";

const ConfettiHistory = () => {
  const totalConfetti = 1500; // TODO: replace with real total from API/state

  const formatNumberWithCommas = (value) => {
    try {
      return new Intl.NumberFormat().format(value);
    } catch {
      return String(value);
    }
  };

  return (
    <div
      className="flex flex-col gap-8 pt-20 min-h-screen relative"
     
    >
      <div className="max-w-6xl w-full pt-6 mx-auto px-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Confetti History
          </h1>
        </div>

        {/* Total Confetti summary card) */}
        <div className="w-[280px] pt-6">
          <div className="w-full items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center">
              {/* Logo */}
              <div className="flex max-w-full justify-center items-center ">
                <img
                  src="/images/Icon.png"
                  alt="Buzzer button logo"
                  className="h-10 w-16 object-contain"
                />
              </div>
              {/* Total Confetti */}
              <span className="text-3xl font-bold">
                {formatNumberWithCommas(totalConfetti)}
              </span>
              <span className="text-sm opacity-80">Total Confetti</span>
            </div>
          </div>
        </div>

        {/* Confetti Table */}
        <div className="my-8">
          <ConfettiTable />
        </div>
      </div>
    </div>
  );
};

export default ConfettiHistory;
