var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let zeros = 1; // Virtual zero at start for boundary
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      zeros++;
    } else {
      count += Math.floor((zeros - 1) / 2);
      if (count >= n) return true;
      zeros = 0;
    }
  }
  zeros++; // Virtual zero at end
  count += Math.floor((zeros - 1) / 2);
  return count >= n;
};
