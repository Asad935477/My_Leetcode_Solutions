/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const revisions1 = version1.split(".");
  const revisions2 = version2.split(".");
  const maxLength = Math.max(revisions1.length, revisions2.length);

  for (let i = 0; i < maxLength; i++) {
    const rev1 = i < revisions1.length ? parseInt(revisions1[i]) : 0;
    const rev2 = i < revisions2.length ? parseInt(revisions2[i]) : 0;

    if (rev1 > rev2) {
      return 1;
    }
    if (rev1 < rev2) {
      return -1;
    }
  }
  return 0;
};
