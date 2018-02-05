var Triangle = require('./../js/triangle.js').triangleModule;

describe('Triangle', function() {

  it('should test if there are 3 sides', function() {
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).toEqual(5)

  });

  it('should determine if 3 sides make a triangle', function() {
    var notTriangle = new Triangle(3,9,22)
    expect(notTriangle.checkType()).toEqual("not a triangle");

  })
});
