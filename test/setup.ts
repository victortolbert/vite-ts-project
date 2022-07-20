import '@testing-library/jest-dom'

import matchers from '@testing-library/jest-dom/matchers'

import { afterAll, afterEach, beforeAll, expect } from 'vitest'
import { fetch } from 'cross-fetch'

import { mockServer } from '../src/utils'

global.fetch = fetch

expect.extend(matchers)

// beforeAll(() => mockServer.listen());
beforeAll(() => mockServer.listen({ onUnhandledRequest: 'error' }))
afterAll(() => mockServer.close())
afterEach(() => mockServer.resetHandlers())
