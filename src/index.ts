import type { Plugin } from 'vite'
import path from 'path'
import fs from 'fs'

export interface VersionFileOptions {
  /**
   * 生成版本文件的路径，默认为 public/version.json
   */
  filepath?: string

  /**
   * 生成版本文件的内容，默认生成当前时间戳
   */
  source?: string | (() => string | Promise<string>)
}

export default function versionFile(options: VersionFileOptions = {}): Plugin {
  const {
    source = () => JSON.stringify({ version: Date.now() }, null, 2),
    filepath = path.join(process.cwd(), 'public', 'version.json'),
  } = options

  return {
    name: 'vite-plugin-version-file',
    async buildStart() {
      mkdirp(path.dirname(filepath))

      await fs.promises.writeFile(
        filepath,
        typeof source === 'function' ? await source() : source,
      )
    },
  }
}

function mkdirp(dir: string) {
  if (!fs.existsSync(dir)) {
    const parentDir = path.dirname(dir)
    mkdirp(parentDir)
    fs.mkdirSync(dir)
  }
}
