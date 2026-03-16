import { useFetcher } from "@/lib/generic.service";
import { ApiResponseType } from "./apitypes";
import { UserBusinessType } from "./business.service";
import { EventType } from "./event.service";
import { DealsGetValues } from "./deal.service";

export const useSuperAdminGetALLBusiness = () => {
  return useFetcher<ApiResponseType<UserBusinessType[]>>(
    ["getbusinesses"],
    null,
    `/api/super-admin/businesses`,
  );
};

export const useSuperAdminGetALLUsers = () => {
  return useFetcher<ApiResponseType<UserBusinessType[]>>(
    ["getbusinesses"],
    null,
    `/api/super-admin/users`,
  );
};

export const useSuperAdminGetALLEvents = () => {
  return useFetcher<ApiResponseType<EventType[]>>(
    ["getbusinesses"],
    null,
    `/api/super-admin/events`,
  );
};

export const useSuperAdminGetALLDeal = () => {
  return useFetcher<ApiResponseType<DealsGetValues[]>>(
    ["getbusinesses"],
    null,
    `/api/super-admin/deals`,
  );
};
