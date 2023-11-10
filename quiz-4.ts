import { CheckPositifNegatifType, FibonacciFunctionType } from "./types/type-4"

const fibonacci: FibonacciFunctionType = (input) => {
  // Perulangan dimulai dari indeks 2 (karena elemen pertama dan kedua sudah ada)
  const fibonacciSeries: number[] = [0, 1]

  for (let i = 2; i <= input; i++) {
    const nextFibonacci = fibonacciSeries[i - 1] + fibonacciSeries[i - 2]
    
    // Jika nilai tersebut melebihi batas (input), perulangan akan dihentikan
    if (nextFibonacci > input) {
      break
    }
    
    // Setiap iterasi, nilai berikutnya dalam deret Fibonacci dihitung dan ditambahkan ke array
    fibonacciSeries.push(nextFibonacci)
  }

  return fibonacciSeries
}

const checkPositifNegatif: CheckPositifNegatifType = (input) => {
  if (input > 0) {
    return "Bilangan Positif"
  } else if (input < 0) {
    return "Bilangan Negatif"
  } else {
    return "Nol"
  }
}

// Menghasilkan deret Fibonacci dari 0 hingga 55
const bilanganFibonacci: string = fibonacci(89).toString()
console.log(bilanganFibonacci)

// Cek bilangan positif atau negatif
const positiveOrNegative: string = checkPositifNegatif(5)
console.log(positiveOrNegative)
