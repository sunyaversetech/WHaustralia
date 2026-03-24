import { Skeleton } from "@/components/ui/skeleton";

export default function EventDetailsSkeleton() {
  return (
    <div className="container-modern mx-auto p-6 pb-20 md:pb-0">
      <div className="flex flex-col md:flex-col">
        {/* Header / Meta Info Skeleton */}
        <div className="order-2 md:order-1 mt-4 md:mt-0 mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <Skeleton className="h-8 w-[250px] sm:h-9 md:h-10 md:w-[400px]" />
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>

          {/* Meta Info Row */}
          <div className="mt-3 flex flex-wrap gap-4">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-5 w-36" />
          </div>
        </div>

        {/* Hero Image Skeleton */}
        <div className="order-1 md:order-2">
          <div className="relative h-80 md:h-[60vh] w-full rounded-2xl overflow-hidden">
            <Skeleton className="h-full w-full" />

            {/* Mobile Overlay Buttons */}
            <div className="absolute inset-0 z-50 flex items-start justify-between p-3 md:hidden">
              <Skeleton className="h-8 w-8 rounded-full bg-white/20" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8 rounded-full bg-white/20" />
                <Skeleton className="h-8 w-8 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Details Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-lg border p-4 md:p-6 rounded-2xl">
              <Skeleton className="h-7 w-40 mb-6" />

              <div className="space-y-6">
                <div className="space-y-4">
                  {/* Info Rows */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-lg" />
                      <div className="space-y-2">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description Skeleton */}
                <div className="space-y-3">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <Skeleton className="h-[400px] w-full rounded-lg" />
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="card border p-4 md:p-6 rounded-2xl">
              <Skeleton className="h-6 w-32 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-11 w-full rounded-xl" />
                <Skeleton className="h-11 w-full rounded-xl" />
              </div>
            </div>

            {/* Contact Card */}
            <div className="card border p-4 md:p-6 rounded-2xl">
              <Skeleton className="h-6 w-40 mb-4" />
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-9 w-9 rounded-lg" />
                  <Skeleton className="h-4 w-40" />
                </div>
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-9 w-9 rounded-lg" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
