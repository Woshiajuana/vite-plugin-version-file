// src/index.ts
import path from "path";
import fs from "fs";
function versionFile(options = {}) {
  const {
    source = () => JSON.stringify({ version: Date.now() }, null, 2),
    filepath = path.join(process.cwd(), "public", "version.json")
  } = options;
  return {
    name: "vite-plugin-version-file",
    async buildStart() {
      mkdirp(path.dirname(filepath));
      await fs.promises.writeFile(
        filepath,
        typeof source === "function" ? await source() : source
      );
    }
  };
}
function mkdirp(dir) {
  if (!fs.existsSync(dir)) {
    const parentDir = path.dirname(dir);
    mkdirp(parentDir);
    fs.mkdirSync(dir);
  }
}
export {
  versionFile as default
};
//# sourceMappingURL=index.mjs.map