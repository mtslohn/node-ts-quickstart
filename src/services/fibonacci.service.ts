export default class FibonacciService {

    fib(num: number): number {
        if (num <= 0) return -1;
        if (num === 1) return 0;
        if (num === 2) return 1;
        return this.fib(num - 1) + this.fib(num - 2);
    }

}