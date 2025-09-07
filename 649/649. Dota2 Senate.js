/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const radiant = [];
  const dire = [];
  const n = senate.length;
  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }
  while (radiant.length > 0 && dire.length > 0) {
    const rIndex = radiant.shift();
    const dIndex = dire.shift();
    if (rIndex < dIndex) {
      radiant.push(rIndex + n);
    } else {
      dire.push(dIndex + n);
    }
  }
  return radiant.length > 0 ? "Radiant" : "Dire";
};
