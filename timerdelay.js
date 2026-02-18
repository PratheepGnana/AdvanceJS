// Get the starting timestamp
const start = performance.now()

setTimeout(() => {
    // Get the ending timestamp
    const end = performance.now()
    console.log(`Execution time: ${end - start} milliseconds`)
}, 1000)

for (let i = 0; i < 10000000000; i++) {
    let answer = i * 200000000000 / 67.8 * (45.7 / 3.2)
}