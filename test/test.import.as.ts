import * as compose from '../src'
import 'should'

describe('* as compose', (): void => {
  it('should export function a', (done) => {
    const result = compose.functionA()
    result.should.equal('function a')
    done()
  })

  it('should export function b', (done) => {
    const result = compose.functionB()
    result.should.equal('function b')
    done()
  })
})
