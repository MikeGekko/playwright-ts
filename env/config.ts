import 'dotenv/config'

export const configuration = {
  URL: process.env.URL,
  STANDATD_USER: process.env.STANDARD_USER,
  LOCKED_OUT_USER: process.env.LOCKED_OUT_USER,
  PROBLEM_USER: process.env.PROBLEM_USER,
  PERFORMANCE_GLITCH_USER: process.env.PERFORMANCE_GLITCH_USER,
  USER_PASSWORD: process.env.USER_PASSWORD,
};
