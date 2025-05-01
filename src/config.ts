import path from "node:path";

import type { IConfig } from "./types";

export const Config = {
	API_URL: Bun.env.API_URL || "http://localhost:5000",
	API_KEY: Bun.env.API_KEY || undefined,
	REFRESH_DISCS_START: Bun.env.REFRESH_DISCS_START?.toLowerCase() === "true",
	REFRESH_DISCS_CRON: Bun.env.REFRESH_DISCS_CRON?.toLowerCase() === "true",
	BACKUP_DIR: Bun.env.BACKUP_DIR || path.resolve("./backup")
} as IConfig;

if (!Config.API_KEY)
	throw new Error(
		"API_KEY is not defined! Must be set equal to the API_KEY in the discit-api project."
	);
