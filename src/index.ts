import { Config } from "./config";
import { Cron } from "./cron";
import { refreshDiscs } from "./refresh";

if (Config.REFRESH_DISCS_CRON) {
	console.log("REFRESH_DISCS_CRON env var is set to 'true' - starting disc refresh cron job...");
	const cron = new Cron();
	cron.refreshDiscsNightly.start();
} else {
	console.log(
		"REFRESH_DISCS_CRON env var is NOT set to 'true' - skipping disc refresh cron job."
	);
}

if (Config.REFRESH_DISCS_START) {
	console.log(
		"REFRESH_DISCS_START env var is set to 'true' - starting startup disc refresh process..."
	);
	refreshDiscs();
} else {
	console.log(
		"REFRESH_DISCS_START env var is NOT set to 'true' - skipping startup disc refresh process."
	);
}
