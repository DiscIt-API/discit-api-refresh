export const DISC_FETCH_URL = "https://www.marshallstreetdiscgolf.com/flightguide";

export enum Site {
	discClass = "disc-item",
	putterClass = "pc-entry",
	idAttr = "data-id",
	discNameAttr = "data-title",
	putterNameAttr = "data-putter",
	brandAttr = "data-brand",
	categoryAttr = "data-category",
	speedAttr = "data-speed",
	glideAttr = "data-glide",
	turnAttr = "data-turn",
	fadeAttr = "data-fade",
	linkAttr = "data-link",
	discPicAttr = "data-pic",
	putterPicAttr = "data-image",
	colorAttr = "data-text",
	backgroundColorAttr = "data-bg"
}

export const CategoryMap = new Map([
	["Distance Drivers", "Distance Driver"],
	["Hybrid Drivers", "Hybrid Driver"],
	["Control Drivers", "Control Driver"],
	["Midrange Drivers", "Midrange"],
	["Putters", "Putter"]
]);

export const StabilityMap = new Map([
	["very-overstable", "Very Overstable"],
	["overstable", "Overstable"],
	["stable", "Stable"],
	["understable", "Understable"],
	["very-understable", "Very Understable"]
]);

export const ID_HASH_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
