import timelineSerial from '@/utils'

describe('test', () => {
  test('basic', () => {
    expect(timelineSerial(null)).toThrow(TypeError)
  })
})
