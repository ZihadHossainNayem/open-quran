import { useQuery } from "@tanstack/react-query";
import { alQuranCloudEndpoints } from "../endpoints/alQuranCloudEndpoints";

export const useSurah = (options = {}) => {
  return useQuery({
    queryKey: ["surah"],
    queryFn: () => alQuranCloudEndpoints.getSurah().then((res) => res.data),
    ...options,
  });
};
