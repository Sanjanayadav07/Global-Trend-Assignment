export const cookieOptions = {
  httpOnly: true,
  secure: true,        // 🔥 force true (Vercel = HTTPS)
  sameSite: "None",    // 🔥 required for cross-origin
  maxAge: 7 * 24 * 60 * 60 * 1000,
};