console.log("task1");

function range(start: number, end: number, step: number) {
    return {
        [Symbol.iterator]() {
            let current = start;
            return {
                next() {
                    if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
                        return { done: true, value: undefined };
                    }
                    const value = current;
                    current += step;
                    return { done: false, value };
                }
            };
        }
    };
}


for (const value of range(0, 5, 1)) {
    console.log(value); 
}
console.log([...range(1, 5, 1)]); 
const iterator1 = range(1, 5, 1)[Symbol.iterator]();
console.log(iterator1.next()); 


//   
// Generator Function
// 


function* range1(start: number, end: number, step: number): Generator<number> {
    let current = start;
    while ((step > 0 && current < end) || (step < 0 && current > end)) {
        yield current;
        current += step;
    }
}

for (const value of range1(0, 5, 1)) {
    console.log(value); 
}

console.log([...range1(1, 5, 1)]); 

const iterator2 = range1(1, 5, 1);
console.log(iterator2.next());
  

