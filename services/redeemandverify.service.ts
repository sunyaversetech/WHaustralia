import { useMutation } from "@tanstack/react-query";
import { ApiResponseType } from "./apitypes";
import { Post } from "@/lib/action";
import { useFetcher } from "@/lib/generic.service";

type RedeemCodeType = {
  dealId: string;
  userId: string;
  business: string;
};

type RedeemCodeResponseType = {
  deal: string;
  user: string;
  business: string;
  uniqueKey: string;
  status: "pending" | "verified";
  verifiedAt?: Date;
};

export const useRedeemCode = () => {
  return useMutation<
    ApiResponseType<RedeemCodeResponseType>,
    any,
    RedeemCodeType
  >({
    mutationKey: ["getRedeem"],
    mutationFn: (data: RedeemCodeType) =>
      Post<RedeemCodeType, ApiResponseType<RedeemCodeResponseType>>({
        url: "/api/deals/redeem",
        data: data,
      }),
  });
};

export const useGetRedeem = () => {
  return useFetcher<ApiResponseType<RedeemCodeResponseType[]>>(
    "redeem",
    null,
    "/api/deals/redeem",
  );
};
