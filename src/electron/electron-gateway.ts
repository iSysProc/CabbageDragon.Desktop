import { Gateway } from 'types'

export const electrongGateway: Gateway = {
    getVersionOff: (type) => process.versions[type]
}