interface MiniProjectType {
    (inputName: string): string
}

const generatePasswordMiniProject: MiniProjectType = (inputName) => {
  // Langkah 1: Gantikan huruf vokal
  // Menggunakan objek literal sebagai pemetaan untuk menggantikan setiap huruf vokal
  const step1: string = inputName.replace(/[aeiou]/gi, match => ({
    'a': 'b',
    'e': 'f',
    'i': 'j',
    'o': 'p',
    'u': 'v'
  }[match.toLowerCase()] || match))

  // Langkah 2: Balikkan input dari belakang ke depan
  const step2: string = [...step1].reverse().join('')

  // Langkah 3: Tukar huruf besar dan kecil
  const step3: string = step2.replace(/./g, char => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()))

  // Langkah 4: Hilangkan spasi
  const step4: string = step3.replace(/\s/g, '')

  return step4
}

const myPassword: string = generatePasswordMiniProject("Vika Vitaloka")
console.log(myPassword)
