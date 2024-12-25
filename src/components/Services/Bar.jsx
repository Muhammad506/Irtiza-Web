const Bar = () => {
  return (
    <main className="py-4">
      <div className="relative bg-[url('/images/services/barBg.avif')] h-40 bg-cover bg-center flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-10">
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Overlay for better text contrast */}
        <p className="relative z-10 text-lg md:text-xl xl:text-2xl font-semibold leading-relaxed max-w-4xl">
          “ We have our service desk based in Australia & Pakistan, a call away
          from you. Your request will be responded in seconds via call or email
          ”
        </p>
      </div>
    </main>
  );
};

export default Bar;
