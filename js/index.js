let arr = [];
let floatArr = [];

let dom = (selector) => {
    return document.querySelector(selector);
}

let displayArray = () => {
    let display = dom("#arrayDisplay");
    display.innerText = arr;
}

let pushArray = () => {
    let input = dom("#inputNum").value;
    let numberInput = Number(input);
    if (input == "") {
        return;
    }
    if (!Number.isInteger(numberInput)) {
        alert("Input must be integer");
        return;
    }
    arr.push(numberInput);
    displayArray();
}

let total = () => {
    let result = dom("#result1");
    let sum = arr.reduce((sum, current) => {
        return sum + current;
    }, 0);
    result.innerText = `Kết quả: ${sum}`;
}

let countPositiveNumber = () => {
    let result = dom("#result2");
    let count = arr.reduce((count, current) => {
        if (current >= 0) {
            return count + 1;
        }
        return count;
    }, 0);
    result.innerText = `Kết quả: ${count}`;
}

let findMin = () => {
    let result = dom("#result3");
    if (arr.length == 0) {
        result.innerText = "Mảng không có phần tử";
        return;
    }
    let min = arr.reduce((min, current) => {
        if (current < min) {
            return current;
        }
        return min;
    }, arr[0]);
    result.innerText = `Kết quả: ${min}`;
}

let findMinPositive = () => {
    let result = dom("#result4");
    if (arr.length == 0) {
        result.innerText = "Mảng không có phần tử";
        return;
    }
    let min = arr.reduce((min, current) => {
        if (current < 0) {
            return min;
        }
        if (current < min) {
            return current;
        }
        return min;
    }, arr[0]);
    if (min < 0) {
        result.innerText = "Mảng không có số dương";
        return;
    }
    result.innerText = `Kết quả: ${min}`;
}

let findLastEven = () => {
    let result = dom("#result5");
    if (arr.length == 0) {
        result.innerText = "Mảng không có phần tử";
        return;
    }
    let even = arr.reduce((even, current) => {
        if (current % 2 == 0) {
            return current;
        }
        return even;
    }, -1);
    result.innerText = `Kết quả: ${even}`;
}

let switchArr = () => {
    let result = dom("#result6");
    let pos1 = dom("#inputPos1").value;
    let pos2 = dom("#inputPos2").value;
    let numberPos1 = Number(pos1);
    let numberPos2 = Number(pos2);
    if (pos1 == "") {
        result.innerText = "Vị trí thứ nhất không được để trống";
        return;
    }
    if (pos2 == "") {
        result.innerText = "Vị trí thứ hai không được để trống";
        return;
    }
    if ( !Number.isInteger(numberPos1) || numberPos1 < 0 ) {
        result.innerText = "Vị trí thứ nhất phải là số nguyên dương";
        return; 
    }
    if ( !Number.isInteger(numberPos2) || numberPos2 < 0 ) {
        result.innerText = "Vị trí thứ hai phải là số nguyên dương";
        return; 
    }
    if (arr.length == 0) {
        result.innerText = "Mảng không có phần tử";
        return;
    }
    let tmp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = tmp;
    result.innerText = `Kết quả: ${arr}`;
}

let ascendSort = () => {
    let result = dom("#result7");
    if (arr.length == 0) {
        result.innerText = "Mảng không có phần tử";
        return;
    }
    arr.sort();
    result.innerText = `Kết quả: ${arr}`;
}

let isPrime = (number) => {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }
    for( let i = 2; i < number - 1; i++ ) {
        if ( number % i == 0 ) {
            return false;
        }
    }
    return true;
}

let findFirstPrimeNumber = () => {
    let result = dom("#result8");
    let havePrime = false;
    if (arr.length == 0) {
        result.innerText = "Mảng không có phần tử";
        return;
    }
    let prime = arr.reduce((prime, current) => {
        if(isPrime(current)) {
            return current;
        }
        return prime;
    }, -1);
    result.innerText = `Kết quả: ${prime}`;
}

let displayFloatArray = () => {
    let display = dom("#floatArrayDisplay");
    display.innerText = floatArr;
}

let pushFloatArray = () => {
    let result = dom("#result9");
    let input = dom("#inputFloatNum").value;
    let floatInput = Number(input);
    if (input == "") {
        result.innerText = "Input không được để trống";
        return;
    }
    floatArr.push(floatInput);
    displayFloatArray();
}

let countIntegerFloatArray = () => {
    let result = dom("#result9");
    let count = 0;
    floatArr.forEach(element => {
        if(Number.isInteger(element)) {
            count++;
        }
    });
    result.innerText = `Số lượng số nguyên trong mảng: ${count}`;
}

let comparePostitiveAndNegative = () => {
    let result = dom("#result10");
    let posCount = 0;
    let negCount = 0;
    arr.forEach(element => {
        if (element >= 0) {
            posCount++;
        }
        else {
            negCount++;
        }
    });
    if(posCount > negCount) {
        result.innerText = `Số dương nhiều hơn số âm`;
    }
    if(posCount < negCount) {
        result.innerText = `Số dương ít hơn số âm`;
    }
    if(posCount == negCount) {
        result.innerText = `Số dương bằng số âm`;
    }
}

displayArray();