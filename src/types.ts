import type * as shared from "discit-types";

export type IDisc = shared.Disc;

export interface IDiscCollections {
	discCollection: HTMLCollectionOf<Element>;
	putterCollection: HTMLCollectionOf<Element>;
}

export interface IConfig {
	API_URL: string;
	API_KEY: string;
	REFRESH_DISCS_START: boolean;
	REFRESH_DISCS_CRON: boolean;
	BACKUP_DIR: string;
}
