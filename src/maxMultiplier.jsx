export const MaxMultiplier = () => {
    const Arr = [2, 3, -5, -2, 4, 1000];
    let initialMul = Arr[0] * Arr[1];
    let x = 0;
    for (let i = 0; i < Arr.length - 1 ; i++) {
        let biggestMul = Arr[i] * Arr[i+1];
        if (initialMul > biggestMul) {
            x = initialMul;
        } else {
            x = biggestMul;
            initialMul = biggestMul;
        }
    }
    console.log("Tích to nhất bằng: " + x);
}