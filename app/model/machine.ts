import { z } from "zod";
import { machineStatusSchema } from "./machineStatus";

export const machineSchema = z.object({
  id: z.string(),
  floor: z.number(),
  install_date: z.string().date(),
  last_maintenance: z.string().date(),
  latitude: z.number(),
  longitude: z.number(),
  machine_type: z.string(),
  status: machineStatusSchema,
});

export type Machine = z.infer<typeof machineSchema>;
