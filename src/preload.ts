import { contextBridge } from 'electron'


contextBridge.exposeInMainWorld('gateway', {
    versionOf: (type: string) => process.versions[type]
})