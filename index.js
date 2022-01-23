export class Point {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {Point} a
   * @param {Point} b
   * @returns {number}
   */
  static calcDistance(a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;

    return Math.hypot(dx, dy);
  }
}
