import { v4 as uuidv4, v5 as uuidv5 } from "uuid";

import { CategoryMap, ID_HASH_NAMESPACE, StabilityMap } from "./constants";

import type { IDisc } from "./types";

export const discMeetsMinCriteria = (disc: IDisc) =>
	disc.id &&
	disc.name &&
	disc.brand &&
	disc.category &&
	disc.speed &&
	disc.glide &&
	disc.turn &&
	disc.fade &&
	disc.stability;

export const slugify = (text: string) =>
	text
		.toLowerCase()
		.replace(/[/\\#,+()$~%!@^|`.'":;*?<>{}[\]]/g, "")
		.replace(/[ ]/g, "-");

export const regexify = (field: string) => ({ $regex: field, $options: "i" });

export const hashString = (toHash: string) => uuidv5(toHash, ID_HASH_NAMESPACE);

export const writeDataToFile = async (data: unknown, path: string) =>
	await Bun.write(path, JSON.stringify(data));

export const parseCategory = (category: string) => CategoryMap.get(category) || category;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseStability = (element: Element, turn: string, fade: string) => {
	if (element) {
		const classes: string = (element.parentNode?.parentNode?.parentNode as Element).className;
		const classesSplit = classes.split(" ");

		// check for stability via class name in html
		for (let i = classesSplit.length - 1; i >= 0; i--) {
			const stability = classesSplit[i];
			if (Array.from(StabilityMap.keys()).includes(stability))
				return StabilityMap.get(stability);
		}
	}

	// if not found in html, calculate it based on turn and fade
	const diff = Number.parseFloat(turn) + Number.parseFloat(fade);
	switch (true) {
		case diff >= 4:
			return "Very Overstable";
		case diff >= 2 && diff < 4:
			return "Overstable";
		case diff < 2 && diff > -2:
			return "Stable";
		case diff <= -2 && diff > -4:
			return "Understable";
		case diff <= -4:
			return "Very Understable";
		default:
			return null;
	}
};

export const parseDecimalString = (decimal: string) => {
	if (decimal.startsWith(".") || decimal.startsWith("-.")) {
		return decimal.replace(".", "0.");
	}
	return decimal;
};

export const newId = () => uuidv4();

export const isAlphaNumeric = (str: string): boolean => {
	let code: number;
	let i: number;
	let len: number;
	for (i = 0, len = str.length; i < len; i++) {
		code = str.charCodeAt(i);
		if (
			!(code > 47 && code < 58) && // numeric (0-9)
			!(code > 64 && code < 91) && // upper alpha (A-Z)
			!(code > 96 && code < 123) // lower alpha (a-z)
		) {
			return false;
		}
	}
	return true;
};

export const getTimestamp = () =>
	new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

export const getSafeISODateString = (date = new Date()) => {
	// Get ISO string and remove milliseconds + 'Z'
	const iso = date.toISOString().split(".")[0];

	// Replace characters not safe in filenames
	// `:` becomes `-`, and we keep `T` for readability
	return iso.replace(/:/g, "-");
};
