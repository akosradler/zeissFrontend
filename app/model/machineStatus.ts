import { z } from "zod";

export const machineStatusSchema = z.union([
  z.literal("idle"),
  z.literal("running"),
  z.literal("finished"),
  z.literal("errored"),
  z.literal("repaired"),
]);

export type MachineStatus = z.infer<typeof machineStatusSchema>;
