export const secret = process.env.AUTH_SECRET || "authcodemaster";
export const expires = process.env.AUTH_EXPIRES || "24h";
export const rounds = process.env.AUTH_ROUNDS || 10;