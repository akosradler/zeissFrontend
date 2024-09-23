import { z } from "zod";
import { machineSchema } from "./machine";
import { machineEventSchema } from "./machineEvent";

export const machineDetailsSchema = machineSchema.extend({
  events: z.array(machineEventSchema),
});

export type MachineDetails = z.infer<typeof machineDetailsSchema>;
