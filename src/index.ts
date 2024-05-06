import type { Plugin } from 'vite'

export default function versionFile(): Plugin {
  return {
    name: 'vite-plugin-version-file',
    buildStart() {
      console.log('buildStart => ')
    },
  }
}
