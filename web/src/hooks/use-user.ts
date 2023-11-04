import { useStoreZ } from "@/utils/state";
import { useRouter } from "next/router";
import { getUserData } from "@/utils/api";
import { useEffect, useState } from "react";

export default function useUser() {
  const router = useRouter();
  const { getToken, flushToken } = useStoreZ();
  const { access_token: token } = getToken();
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    if (!token) {
      localStorage.setItem("redirect_to", router.asPath);
      router.push("/auth");
    }

    getUserData(token).then((data) => {
      if (!data) {
        flushToken()
        localStorage.setItem("redirect_to", router.asPath);
        router.push("/auth");
      } else {
        setUser(data.userData);
      }
    });
  }, [router, token]);
  return user;
}
