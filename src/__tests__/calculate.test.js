import calculate from '../logic/calculate';

describe('Tests to check if the mathematical logic work', () => {
  test('The button AC should clear all properties', () => {
    // Arrange
    let calculatorObject = {};

    // Act
    calculatorObject = { ...calculatorObject, ...calculate(calculatorObject, '8') };
    calculatorObject = { ...calculatorObject, ...calculate(calculatorObject, '\u00D7') };
    calculatorObject = { ...calculatorObject, ...calculate(calculatorObject, '7') };
    calculatorObject = { ...calculatorObject, ...calculate(calculatorObject, 'AC') };

    // Assert
    expect(calculatorObject).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Return first number if nothing is on screen', () => {
    // Act
    let calculatorObject = {};

    // Arrange
    calculatorObject = { ...calculatorObject, ...calculate(calculatorObject, '8') };

    // Assert
    expect(calculatorObject).toStrictEqual({
      total: null,
      next: '8',
    });
  });

  test('If two numbers are clicked consecutively, I should receive a concatenated string', () => {
    // Act
    let calculatorObject = {};

    // Arrange
    calculatorObject = { ...calculatorObject, ...calculate(calculatorObject, '8') };
    calculatorObject = { ...calculatorObject, ...calculate(calculatorObject, '2') };

    // Assert
    expect(calculatorObject).toStrictEqual({
      total: null,
      next: '82',
    });
  });

  test('Return concatenated string if two numbers are clicked consecutively after an operator', () => {
    // Act
    let calculatorObject = {};

    // Arrange
    calculatorObject = { ...calculate(calculatorObject, '8') };
    calculatorObject = { ...calculate(calculatorObject, '+') };
    calculatorObject = { ...calculate(calculatorObject, '4') };
    calculatorObject = { ...calculate(calculatorObject, '3') };

    // Assert
    expect(calculatorObject).toStrictEqual({
      total: '8',
      next: '43',
      operation: '+',
    });
  });

  test('8 + 8 = 16', () => {
    // Act
    let calculatorObject = {};

    // Arrange
    calculatorObject = { ...calculate(calculatorObject, '8') };
    calculatorObject = { ...calculate(calculatorObject, '+') };
    calculatorObject = { ...calculate(calculatorObject, '8') };
    calculatorObject = { ...calculate(calculatorObject, '=') };

    // Assert
    expect(calculatorObject).toStrictEqual({
      total: '16',
      next: null,
      operation: null,
    });
  });

  it('27 ÷ 9 = 3', () => {
    // Act
    let calculatorObject = {};

    // Arrange
    calculatorObject = { ...calculate(calculatorObject, '2') };
    calculatorObject = { ...calculate(calculatorObject, '7') };
    calculatorObject = { ...calculate(calculatorObject, '÷') };
    calculatorObject = { ...calculate(calculatorObject, '9') };
    calculatorObject = { ...calculate(calculatorObject, '=') };

    // Assert
    expect(calculatorObject).toStrictEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });

  it('23.5 - 18 = 5.5', () => {
    // Act
    let calculatorObject = {};

    // Arrange
    calculatorObject = { ...calculate(calculatorObject, '2') };
    calculatorObject = { ...calculate(calculatorObject, '3') };
    calculatorObject = { ...calculate(calculatorObject, '.') };
    calculatorObject = { ...calculate(calculatorObject, '5') };
    calculatorObject = { ...calculate(calculatorObject, '-') };
    calculatorObject = { ...calculate(calculatorObject, '18') };
    calculatorObject = { ...calculate(calculatorObject, '=') };

    // Assert
    expect(calculatorObject).toStrictEqual({
      total: '5.5',
      next: null,
      operation: null,
    });
  });
});
