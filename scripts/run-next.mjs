import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const localAppData = join(root, ".cache", "localappdata");
const wasmDir = join(root, "node_modules", "@next", "swc-wasm-nodejs");

mkdirSync(localAppData, { recursive: true });

const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");
const args = process.argv.slice(2);

const child = spawn(process.execPath, [resolve(nextBin), ...args], {
  cwd: root,
  env: {
    ...process.env,
    LOCALAPPDATA: localAppData,
    NEXT_TEST_WASM: "1",
    NEXT_TEST_WASM_DIR: wasmDir,
  },
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
