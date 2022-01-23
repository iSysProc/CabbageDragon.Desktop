import '@testing-library/jest-dom/extend-expect'
import { Gateway } from 'types'

declare global {
    interface Window {
        gateway: Gateway
    }
}