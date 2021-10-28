import operate from '../logic/operate';

describe('Perform Mathematical Operations', () => {
  it('Gives sum of 9 if 5 + 4 is added', () => {
    // Arrange
    const firstNumber = '5';
    const secondNumber = '4';
    const operator = '+';

    // Act
    const total = operate(firstNumber, secondNumber, operator);

    // Assert
    expect(total).toBe('9');
  });

  it('Should perform a modulus operation', () => {
    // Arrange
    const firstNumber = '5';
    const secondNumber = '4';
    const operator = '%';

    // Act
    const result = operate(firstNumber, secondNumber, operator);

    // Assert
    expect(result).toBe('1');
  });

  it('Gives a product of 9 if 3 * 3', () => {
    // Arrange
    const firstNumber = '3';
    const secondNumber = '3';
    const operator = '\u00D7';

    // Act
    const result = operate(firstNumber, secondNumber, operator);

    // Assert
    expect(result).toBe('9');
  });

  test('/ is not division symbol in maths', () => {
    // Arrange
    const a = 2;
    const b = 2;

    // Act and Assert
    expect(() => operate(a, b, '/')).toThrow("Unknown operation '/'");
  });

  test('The number 0 can not divide a number', () => {
    // Arrange
    const firstNumber = '1000';
    const secondNumber = '0';
    const operator = '÷';

    // Act
    const result = operate(firstNumber, secondNumber, operator);

    // Assert
    expect(result).toBe('Can\'t divide by 0.');
  });
});
