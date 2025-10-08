/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  class PriorityQueue {
    constructor(comparator = (a, b) => a < b) {
      this._heap = [];
      this._comparator = (i, j) => comparator(this._heap[i], this._heap[j]);
    }
    size() {
      return this._heap.length;
    }
    isEmpty() {
      return this.size() === 0;
    }
    peek() {
      return this._heap[0];
    }
    push(value) {
      this._heap.push(value);
      this._siftUp();
    }
    pop() {
      if (this.size() > 1) this._swap(0, this.size() - 1);
      const poppedValue = this._heap.pop();
      if (this.size() > 0) this._siftDown();
      return poppedValue;
    }
    _parent(i) {
      return Math.floor((i - 1) / 2);
    }
    _leftChild(i) {
      return 2 * i + 1;
    }
    _rightChild(i) {
      return 2 * i + 2;
    }
    _swap(i, j) {
      [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
      let nodeIdx = this.size() - 1;
      while (nodeIdx > 0 && this._comparator(nodeIdx, this._parent(nodeIdx))) {
        this._swap(nodeIdx, this._parent(nodeIdx));
        nodeIdx = this._parent(nodeIdx);
      }
    }
    _siftDown() {
      let nodeIdx = 0;
      while (
        (this._leftChild(nodeIdx) < this.size() &&
          this._comparator(this._leftChild(nodeIdx), nodeIdx)) ||
        (this._rightChild(nodeIdx) < this.size() &&
          this._comparator(this._rightChild(nodeIdx), nodeIdx))
      ) {
        const smallerChildIdx =
          this._rightChild(nodeIdx) < this.size() &&
          this._comparator(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
            ? this._rightChild(nodeIdx)
            : this._leftChild(nodeIdx);
        this._swap(nodeIdx, smallerChildIdx);
        nodeIdx = smallerChildIdx;
      }
    }
  }

  const n = grid.length;
  const visited = new Set();
  const pq = new PriorityQueue((a, b) => a[0] < b[0]);

  pq.push([grid[0][0], 0, 0]);
  visited.add("0,0");

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (!pq.isEmpty()) {
    const [time, r, c] = pq.pop();

    if (r === n - 1 && c === n - 1) {
      return time;
    }

    for (const [dr, dc] of directions) {
      const newR = r + dr;
      const newC = c + dc;
      const key = `${newR},${newC}`;

      if (newR >= 0 && newR < n && newC >= 0 && newC < n && !visited.has(key)) {
        visited.add(key);
        const newTime = Math.max(time, grid[newR][newC]);
        pq.push([newTime, newR, newC]);
      }
    }
  }
};
