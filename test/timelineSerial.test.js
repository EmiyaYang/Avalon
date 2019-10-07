import { timelineSerial } from '@/utils'

describe('test', () => {
  test('execptions', () => {
    expect(timelineSerial).toThrow(TypeError)
  })

  test('basic', () => {
    expect(timelineSerial([])).toEqual({})
  })
})
