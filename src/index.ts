import type { Plugin } from 'vite'
import path from 'path'

export interface VersionFileOptions {
  filepath?: string
  source?: string | (() => string | Promise<string>)
}

export default function versionFile(options: VersionFileOptions = {}): Plugin {
  const {
    source = 'xxx',
    filepath = path.join(process.cwd(), 'public', 'version.json'),
  } = options

  return {
    name: 'vite-plugin-version-file',
    async buildStart() {
      console.log('11')
      this.emitFile({
        fileName: filepath,
        source: typeof source === 'function' ? await source() : source,
        type: 'asset',
      })
      console.log('222')
    },
  }
}
