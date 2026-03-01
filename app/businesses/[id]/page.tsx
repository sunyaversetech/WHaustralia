"use client";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle, Mail, Tag } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetSingleBusiness } from "@/services/business.service";
import BusinessReviewSection from "@/components/Business/Comment";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full bg-slate-100 animate-pulse rounded-xl" />
  ),
});

export default function BusinessPage() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const { data } = useGetSingleBusiness();
  const business = {
    business_name: "The Coffee Hub",
    business_category: "Cafe & Restaurant",
    email: "contact@coffeehub.com",
    city_name: "Sydney",
    community_name: "Surry Hills",
    location: "-33.8832, 151.2100",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    verified: true,
    abn_number: "12 345 678 910",
  };

  console.log(data);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="relative h-64 w-full rounded-2xl overflow-hidden">
        <Image
          width={500}
          height={500}
          src={data?.data.image || "/placeholder.svg"}
          alt={data?.data.business_name ?? "Business"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-4xl font-bold">{data?.data.business_name}</h1>
            {business.verified && (
              <CheckCircle className="text-blue-400 w-6 h-6 fill-current" />
            )}
          </div>
          <p className="flex items-center gap-2 opacity-90 text-lg">
            <MapPin className="w-5 h-5" /> {data?.data.community_name},{" "}
            {business.city_name}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">About Business</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Category</p>
                  <p className="font-medium flex items-center gap-2">
                    <Tag className="w-4 h-4" /> {data?.data.business_category}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">ABN Number</p>
                  <p className="font-medium">{data?.data.abn_number}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {data?.data.email}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Our Location</h2>
            {data?.data?.location ? (
              <Map
                location={data?.data?.location ?? ""}
                businessName={business.business_name}
              />
            ) : (
              "No Map For this Business"
            )}
          </div>
          <BusinessReviewSection />
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-50 border-none">
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Business Status</h3>
              <Badge
                className={`${data?.data?.verified ? "bg-green-600" : "bg-red-500"}`}>
                {data?.data?.verified
                  ? "Verified Business"
                  : "Pending Verification"}
              </Badge>
              <p className="text-xs text-muted-foreground mt-4">
                This business is a registered member of the{" "}
                {data?.data?.community_name ?? "WHA"} community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
