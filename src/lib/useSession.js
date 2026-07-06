import { authClient } from "./auth-client";

export default function useSession() {
    return authClient.useSession();
}
