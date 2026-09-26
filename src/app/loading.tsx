const LoadingPage = () => {
  return (
    <div className="flex min-h-[74vh] items-center justify-center">
      <div className="text-center">
        <p className="text-4xl font-bold text-[#B7F000] animate-pulse">
          Loading
        </p>

        <div className="mt-3 flex justify-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#B7F000]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#B7F000] [animation-delay:0.2s]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#B7F000] [animation-delay:0.4s]"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
