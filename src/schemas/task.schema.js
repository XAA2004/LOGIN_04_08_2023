import { z } from 'zod';

export const createTaskSchema = z.object({
    tittle: z.string({
        required_error:'Title is Required',
    }),
    description : z.string({
        required_error:"Description Is Required",
    }),
    date: z.string().datetime().optional()
});