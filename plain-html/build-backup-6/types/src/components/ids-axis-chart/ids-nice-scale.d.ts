export interface IdsScaleOptions {
    maxTicks?: number;
    /** The min value to show */
    minPoint?: number;
    /** The max value to show */
    maxPoint?: number;
}
/**
 * Calculates a nice scale range for a pair of values.
 */
export default class NiceScale {
    #private;
    /** The calculated tick spacing */
    tickSpacing?: number;
    /** The calculated nice min value */
    niceMin: number;
    /** The calculated nice max value */
    niceMax: number;
    /**
     * Instantiates a new instance of the NiceScale class.
     * @param {number} min the minimum data point on the axis
     * @param {number} max the maximum data point on the axis
     * @param {object} options Additional less used options (maxTicks, minPoint, maxPoint)
     */
    constructor(min: number, max: number, options?: IdsScaleOptions);
}
