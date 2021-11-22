import { useMemo } from "react";
import useWeb3Provider from "hooks/useWeb3Provider";

import { getCustomContract } from "utils/contractHelpers";

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useCustomContract = (abi, address) => {
  const provider = useWeb3Provider();
  return useMemo(() => getCustomContract(abi, address, provider.getSigner()), [provider, abi, address]);
};
