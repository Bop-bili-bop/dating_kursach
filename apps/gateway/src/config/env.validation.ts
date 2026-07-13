import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),

  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  JWT_ACCESS_SECRET: z.string().min(1),
  JWT_REFRESH_SECRET: z.string().min(1),

  REDIS_HOST: z.string(),
  REDIS_PORT: z.coerce.number().default(6379),

  KAFKA_BROKERS: z.string().optional(),
});

export function validate(config: Record<string, unknown>) {
  return envSchema.parse(config);
}

export type Env = z.infer<typeof envSchema>;
