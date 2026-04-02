require('@testing-library/jest-dom')
import { TextEncoder, TextDecoder } from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

Object.defineProperty(window, 'scrollTo', {
	writable: true,
	value: jest.fn()
})

Object.defineProperty(navigator, 'clipboard', {
	writable: true,
	value: {
		writeText: jest.fn()
	}
})