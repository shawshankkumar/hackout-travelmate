import { useStoreZ } from "@/utils/state";
import { useRouter } from "next/router";
import { getUserData } from "@/utils/api";
import { useEffect, useState } from "react";

export default function useAuth() {
  const router = useRouter();
  const { auth, getToken, addToken } = useStoreZ();
  const { access_token: token} = getToken();
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    if (!token) {
      router.push("/auth");
    }

    getUserData(token).then((data) => {
      if (!data) {
        router.push("/auth");
      } else {
        setUser(data.userData);
      }
    });

  }, [router, token])

  return {
    user,
  };
}