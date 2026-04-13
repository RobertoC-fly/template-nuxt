import { describe, expect, it } from 'vitest'

describe('example unit test', () => {
  it('should sum two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  it('should support basic string assertions', () => {
    expect('nuxt template').toContain('nuxt')
  })
})
