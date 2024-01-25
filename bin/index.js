#!/usr/bin/env node
import { spawn } from "child_process";

const langsungproduktif = "https://web.facebook.com";
const cmd =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";

const child = spawn(cmd, [langsungproduktif], {
  detached: true,
  stdio: "ignore",
});

child.unref();

console.log("Langsung produktif ygy");
