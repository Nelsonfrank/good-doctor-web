import { createContext } from "react";
import { createContextualCan } from "@casl/react";
import { AppAbility } from "@/config/ability";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AbilityContext = createContext<AppAbility>(undefined!);

export default createContextualCan(AbilityContext.Consumer);
