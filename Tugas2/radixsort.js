// Fungsi untuk mendapatkan digit pada posisi tertentu
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Fungsi untuk menghitung jumlah digit pada angka terbesar
function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Fungsi untuk mendapatkan jumlah digit maksimum dalam array
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

// Fungsi utama Radix Sort
function radixSort(nums) {
    const maxDigitCount = mostDigits(nums); // Cari jumlah digit maksimum
    
    for (let k = 0; k < maxDigitCount; k++) {
        // Buat 10 "bucket" untuk masing-masing digit (0-9)
        let digitBuckets = Array.from({ length: 10 }, () => []);
        
        // Tempatkan setiap angka ke dalam bucket sesuai digit pada posisi `k`
        for (let num of nums) {
            const digit = getDigit(num, k);
            digitBuckets[digit].push(num);
        }
        
        // Gabungkan kembali angka dari bucket
        nums = [].concat(...digitBuckets);
    }
    
    return nums;
}

// Contoh penggunaan
const array = [100, 45, 70, 19, 67, 24, 5,];
console.log(array);
const sortedArray = radixSort(array);
console.log(sortedArray);