import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi, //mutationFn(newSettings) : updateSetting(newSettings)
    onSuccess: () => {
      toast.success("Settings successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSettings };
}
