import { publicProcedure, router } from "./trpc";
import { z } from "zod";

import { healthRouter } from "./routes/health/route";
import { authRouter } from "./routes/auth/route";
// import { formRouter } from "./routes/form/route";

export const serverRouter = router({
  health: healthRouter,
  auth: authRouter,
  abhishek: publicProcedure
    .meta({ openapi: { method: "GET", path: "/abhishek" } })
    .input(z.object({ name: z.string(), email: z.email(), age:z.number() }))
    .output(z.object({ message: z.string() }))
    .query(async ({ input }) => {
      return {
        message: `Hello ${input.email}`
      } 
  }),
});

export { createContext } from "./context";
export type ServerRouter = typeof serverRouter;
