import { LogMethodCall } from '../Task3/Task3';

export class DemoService {
    @LogMethodCall()
    calculateSum(a: number, b: number): number {
        return a + b;
    }
}

// Example Usage:
const demoService = new DemoService();
demoService.calculateSum(5, 7);
