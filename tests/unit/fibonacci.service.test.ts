import FibonacciService from "../../src/services/fibonacci.service";

const service = new FibonacciService();

it('Fibonacci for 4', () => {
    const result = service.fib(4);
    expect(result).toEqual(2);
});

it('Fibonacci for 5', () => {
    const result = service.fib(5);
    expect(result).toEqual(3);
});

it('Fibonacci for 6', () => {
    const result = service.fib(6);
    expect(result).toEqual(5);
});