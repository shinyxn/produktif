#!/usr/bin/env node
import { spawn } from "child_process";

const langsungproduktif = "https://web.facebook.com";
const cmd = process.platform === "darwin" ? "open" : process.platform === "win32" ? "cmd.exe" : "xdg-open";
const args = process.platform === "win32" ? ["/c", "start", langsungproduktif] : [langsungproduktif];

const child = spawn(cmd, args, { detached: true, stdio: "ignore" });

child.unref();

console.log("Langsung produktif ygy");
