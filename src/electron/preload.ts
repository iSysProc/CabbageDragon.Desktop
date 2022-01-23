import { contextBridge } from 'electron'
import { electrongGateway } from './electron-gateway'

contextBridge.exposeInMainWorld('gateway', electrongGateway)