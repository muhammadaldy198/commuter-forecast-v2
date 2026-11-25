import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
// v2: the eclipse helps the commuters cross, then charges them for the shade.

const entry = "In Velmara, the eclipse pauses the heatwave at noon so commuters cross the spice market, then bills each one shadow for the shade.";
const target = "/output/entry.txt";
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);
