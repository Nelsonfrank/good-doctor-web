// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { appointmentRouter } from "./appointment";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("auth.", authRouter)
  .merge("user.", userRouter)
  .merge("appointment.", appointmentRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
