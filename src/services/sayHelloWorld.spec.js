const sayHelloWorld = require('./sayHelloWorld')

describe('Say Hello tests', () => {
  it('Should say Hello World', () => {
    const response = sayHelloWorld.sayHello()

    expect(response).toBe('Hello World!')
  });

  it('Should say Hello Aliton', () => {
    const response = sayHelloWorld.sayHello('Aliton');

    expect(response).toBe('Hello Aliton!');
  })
  
})