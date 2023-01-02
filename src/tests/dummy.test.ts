
class MyTest{
  public som(x:number,y: number): number {
    return x + y
  }
}

describe('testing index file', () => {
  test('double function', () => {
    expect(5*2).toBe(10);
  });

describe('other function', () => {
  test('test the MyTest function som', ()=> {
    const myTest = new MyTest
    expect(myTest.som(3,6)).toBe(9);
  })
})

});