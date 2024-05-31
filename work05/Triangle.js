'use strict';

/**
 * 三角形
 */
export class Triangle {
    /**
     * コンストラクタ
     * @param {Number} bottom 底辺の長さ
     * @param {Number} height 底辺の長さ
     */
    constructor(bottom, height) {
        this.bottom = bottom;
        this.height = height;
    }
    /**
     * bottom を返します
     * @return {Number} 底辺の長さ
     */
    getBottom() {
        return this.bottom;
    }
    /**
     * height を返します
     * @return {Number} 高さの長さ
     */
    getHeight() {
        return this.height;
    }
    /**
     * 面積を計算します
     * @return {Number} 面積
     */
    calcArea() {
        return this.bottom * this.height / 2;
    }
}
