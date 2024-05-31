'use strict';

/**
 * 正方形
 */
export class Square {
    /**
     * コンストラクタ
     * @param {Number} size 辺の長さ
     */
    constructor(size) {
        this.size = size;
    }
    /**
     * size を返します
     * @return {Number} 辺の長さ
     */
    getSize() {
        return this.size
    }
    /**
     * 面積を計算します
     * @return {Number} 面積
     */
    calcArea() {
        return this.size ** 2;
    }
}
