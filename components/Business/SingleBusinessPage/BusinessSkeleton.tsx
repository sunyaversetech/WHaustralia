import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function BusinessDetailsSkeleton() {
  return (
    <div className="container-modern mx-auto p-6 animate-pulse">
      <div className="flex flex-col md:flex-col">
        <div className="order-2 md:order-1 mt-4 md:mt-0 mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <Skeleton className="h-8 w-64 md:h-10 md:w-96" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Skeleton className="h-5 w-8" />
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-4 w-4 rounded-full" />
              ))}
            </div>
            <Skeleton className="h-5 w-24" />
            <Skeleton className="hidden md:block h-4 w-4 rounded-full" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative h-80 md:h-120 w-full rounded-2xl overflow-hidden">
            <Skeleton className="h-full w-full" />

            <div className="absolute inset-0 flex items-start justify-between p-3 md:hidden">
              <Skeleton className="h-8 w-8 rounded-full bg-white/30" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8 rounded-full bg-white/30" />
                <Skeleton className="h-8 w-8 rounded-full bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <Skeleton className="h-7 w-40 mb-4" />
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Skeleton className="h-7 w-36" />
            <Skeleton className="h-[300px] w-full rounded-xl" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-7 w-32" />
            <Skeleton className="h-24 w-full rounded-xl" />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-50 border-none">
            <CardContent className="pt-6 space-y-4">
              <Skeleton className="h-6 w-48 mb-2" />
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-50 border-none">
            <CardContent className="pt-6 space-y-4">
              <Skeleton className="h-6 w-36 mb-2" />
              <Skeleton className="h-8 w-32 rounded-full" />{" "}
              <div className="flex gap-2 items-center mt-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-6 rounded-sm" />
                <Skeleton className="h-8 w-24 rounded-sm" />
              </div>
              <div className="space-y-2 mt-4">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
