//Buble sort

function bubbleTri(arr) {
    let T = arr.slice(); 
    for (let i = 0; i < T.length - 1; i++) {
        for (let j = 0; j < T.length - i - 1; j++) {
            if (T[j] > T[j + 1]) {
                let temp = T[j];
                T[j] = T[j + 1];
                T[j + 1] = temp;
            }
        }
    }
    return T; 
}

console.log(bubbleTri([5, 4, 3, 2, 1]));

//Selection Sort

function selectionsort(n) {
    let T =n.slice();
    for (let i=0;i<T.length;i++){
        let min=i;
        for (let j=i+1;j<T.length;j++){
            if (T[min]>T[j]){
                min=j;
            }
        }
        [T[i],T[min]]=[T[min],T[i]]; 
    }
    return T;
}
let arr= [1,5,2,8,3,10,9, 21, -1];
let v= selectionsort(arr);
console.log(v);

//Insertion Sort

function trinsertion(m){
    let T2=m.slice();
    for (i=1;i<T2.length;i++){
        let pos =T2[i];
        let j=i-1;
        while (j>=0 && pos<T2[j]){
          T2[j+1]=T2[j];
            j--;
        }
          T2[j+1]=pos;
    }
    return T2;
}
let s= [1,5,2,8,17,10,9];
let l= selectionsort(s);
console.log(l);

//Linear Search

function linearSearch(arr, key) {
    let T3 = arr.slice();
    for (let i = 0; i < T3.length; i++) {
        if (T3[i] === key) {
            return i;
        }
    }
    return null; 
}

//Binary Search

function binarySearch(arr, target) {
    let T4 = arr.slice();
    let low = 0;
    let high = T4.length - 1;

    while (low <= high) { 
        let mid = Math.floor((low + high) / 2);
        if (T4[mid] === target) {
            return mid;
        } else if (T4[mid] < target) {
            low = mid + 1;
        } else { 
            high = mid - 1;
        }
    }

    return -1;
}

let pp = [1, 5, 2, 8, 17, 10, 9];
let kk = 9;
let go = binarySearch(pp, kk);
console.log(go);