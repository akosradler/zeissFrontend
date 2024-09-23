import { z } from "zod";
import { machineStatusSchema } from "./machineStatus";

export const machineEventSchema = z.object({
  id: z.string(),
  machine_id: z.string(),
  status: machineStatusSchema,
  timestamp: z.string().date(),
});

export type MachineEvent = z.infer<typeof machineEventSchema>;
