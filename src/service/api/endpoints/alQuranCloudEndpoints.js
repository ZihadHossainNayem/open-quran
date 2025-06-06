import { apiClient } from "../config/client";

export const alQuranCloudEndpoints = {
  getSurah: () => apiClient.get("/surah"),
};
