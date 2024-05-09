import { getPlayerInfo } from "@/lib/api";
import constants from "@/lib/constants";
import { usePlayerInfoStore } from "@/stores/use-player-info-store";
import { useMutation } from "@tanstack/react-query";

const useLoadPlayerInfoMutation = () => {
  const { version, setPlayerInfo } = usePlayerInfoStore();

  if (version !== constants.version) {
    setPlayerInfo(null);
  }

  return useMutation({
    mutationFn: (username: string) => getPlayerInfo(username),
    onSuccess: (data) => {
      setPlayerInfo(data);
    }
  });
}

export default useLoadPlayerInfoMutation;