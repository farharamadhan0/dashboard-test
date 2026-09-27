import { z } from "zod"

export const schema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  gender: z.string(),
  company: z.string(),
  phone: z.string(),
  registered: z.string(),
})