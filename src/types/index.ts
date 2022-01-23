export type Gateway = {
    getVersionOff: (type: 'chrome' | 'node' | 'electron') => string
}