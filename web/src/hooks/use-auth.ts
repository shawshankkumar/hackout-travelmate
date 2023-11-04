import { useStoreZ } from "@/utils/state";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth() {
  const router = useRouter();
  const { getToken } = useStoreZ();
  const { access_token: token} = getToken();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [router, token])

  return {
    isAuthenticated,
    token,
  };
}
