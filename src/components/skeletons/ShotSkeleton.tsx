const ShotSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-16 bg-white shadow-sm" /> {/* Header skeleton */}

      <main className="flex-grow">
        <div className="max-w-2xl mx-auto bg-white p-4">
          {/* User info skeleton */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Image skeleton */}
          <div className="w-full aspect-square bg-gray-200 animate-pulse" />

          {/* Actions skeleton */}
          <div className="py-4">
            <div className="flex space-x-4">
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            </div>

            {/* Description skeleton */}
            <div className="mt-4 space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </main>

      <div className="h-16 bg-white mt-auto" /> {/* Footer skeleton */}
    </div>
  );
};

export default ShotSkeleton; 