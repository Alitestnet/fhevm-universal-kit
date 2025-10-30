// React hooks for using the FHEVM SDK within components.

import { useState, useEffect } from "react";
import { FhevmClient } from "../core/fhevmClient";
import { VoteManager } from "../core/voteManager";

export function useFhevmClient(rpcUrl: string, privateKey?: string) {
  const [client, setClient] = useState<FhevmClient | null>(null);

  useEffect(() => {
    const c = new FhevmClient({ rpcUrl, privateKey });
    setClient(c);
  }, [rpcUrl, privateKey]);

  return client;
}

export function useVoteManager(client: FhevmClient | null) {
  const [manager, setManager] = useState<VoteManager | null>(null);

  useEffect(() => {
    if (client) {
      setManager(new VoteManager(client));
    }
  }, [client]);

  return manager;
}
