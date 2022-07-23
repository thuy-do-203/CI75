export const TeamWeight = () => {
    const weight = [60, 40, 55, 75, 64];
    const teamWeight = [0, 0]
    for (let i = 0; i < weight.length; i++) {
        if (i % 2 == 0) {
        teamWeight[0] += weight[i];
        } else {
            teamWeight[1] += weight[i];
        }
    }
    console.log("Cân nặng của mọi người là: " + weight);
    console.log("Cân nặng của team 1 và 2 lần lượt là: " + teamWeight);
}
