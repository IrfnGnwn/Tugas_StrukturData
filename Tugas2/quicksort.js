// Fungsi utama Quicksort
function quickSort(arr) {
    // Jika array memiliki 0 atau 1 elemen, tidak perlu disortir
    if (arr.length <= 1) {
        return arr;
    }

    // Pilih elemen pivot (di sini menggunakan elemen terakhir)
    const pivot = arr[arr.length - 1];
    const left = [];  // Elemen yang lebih kecil dari pivot
    const right = []; // Elemen yang lebih besar atau sama dengan pivot

    // Pisahkan elemen berdasarkan pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); // Elemen yang lebih kecil dari pivot
        } else {
            right.push(arr[i]); // Elemen yang lebih besar atau sama dengan pivot
        }
    }

    // Rekursif pada bagian kiri dan kanan, lalu gabungkan
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [50, 2, 29, 32, 7, 77];
console.log(array);
const sortedArray = quickSort(array);
console.log(sortedArray);
