import { Skeleton } from "@/components/ui/skeleton";

export default function LandingPageSkeleton() {
  return (
    <div className="container-modern animate-pulse">
      <div className="px-4 pt-2 md:pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-6 w-6 rounded-full bg-primary/20" />
          <Skeleton className="h-6 w-48" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              className="h-48 md:h-64 w-full min-w-[300px] rounded-2xl"
            />
          ))}
        </div>
      </div>

      <div className="mt-2 md:mt-4 bg-white rounded-t-3xl px-4 md:px-6">
        <div className="container-modern py-4 md:py-6 border-b border-divider">
          <Skeleton className="h-6 w-3/4 md:w-1/3 mb-6" />
          <div className="flex flex-wrap justify-between gap-2">
            {[1, 2, 3].map((i) => (
              <Skeleton
                key={i}
                className="flex-1 min-w-[100px] h-20 md:h-28 rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="container-modern pt-2 pb-4 md:py-6 border-b border-divider">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-md bg-primary/10" />
              <Skeleton className="h-6 w-40" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                className="h-64 w-64 min-w-[250px] rounded-xl"
              />
            ))}
          </div>
        </div>

        <div className="container-modern pt-2 pb-4 md:py-6 border-b border-divider">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-md bg-primary/10" />
              <Skeleton className="h-6 w-40" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                className="h-64 w-64 min-w-[250px] rounded-xl"
              />
            ))}
          </div>
        </div>

        <div className="pt-2 pb-4 md:py-6 border-b border-divider">
          <div className="card-lg !rounded-lg p-6 md:p-8 bg-neutral-50">
            <div className="flex flex-col items-center mb-6">
              <Skeleton className="h-10 w-10 rounded-lg mb-4" />
              <Skeleton className="h-6 w-48" />
            </div>
            <div className="flex justify-center gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-10 md:w-32 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 md:py-6">
        <div className="card p-4 bg-yellow-50/50">
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-10 rounded-xl bg-yellow-200" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-32 bg-yellow-200" />
              <Skeleton className="h-3 w-full bg-yellow-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
