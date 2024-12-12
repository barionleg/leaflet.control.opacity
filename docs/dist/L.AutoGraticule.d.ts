import { LatLngBounds } from 'leaflet';
import { LatLngExpression } from 'leaflet';
import { LayerGroup } from 'leaflet';
import { LayerOptions } from 'leaflet';
import { LeafletEventHandlerFnMap } from 'leaflet';
import { Map as Map_2 } from 'leaflet';
import { Marker } from 'leaflet';
import { Polyline } from 'leaflet';
import { PolylineOptions } from 'leaflet';

declare class AutoGraticule extends LayerGroup {
    options: AutoGraticuleOptions;
    lineStyle: PolylineOptions;
    _bounds: LatLngBounds;
    constructor(options?: Partial<AutoGraticuleOptions>);
    onAdd(map: Map_2): this;
    onRemove(map: Map_2): this;
    redraw(): this;
    constructLines(): void;
    buildXLine(x: number): Polyline;
    buildYLine(y: number): L.Polyline;
    buildLabel(axis: 'gridlabel-horiz' | 'gridlabel-vert', val: number): Marker<any>;
    /**
     * Rounds the given number to a fixed number of decimals in order to avoid floating point inaccuracies
     * (for example to make 0.1 + 0.2 = 0.3 instead of 0.30000000000000004).
     */
    static fixFloatingPoint(number: number): number;
    /**
     * Rounds the given number to the given number of decimals.
     */
    static round(number: number, digits: number): number;
    /**
     * Given the distance between two coordinates, floors this distance to 90, 60, 45, 30 or
     * 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01, ...
     * This will define the distance between two grid lines.
     * @param variableDistance This should be true when the distance between the grid lines will be variable, that is for the latitude
     *     lines (because in Meractor projection the distance between two latitutes gets larger towards the poles, but the distance
     *     between two longitudes is constant throughout the globe).
     *     For constant distance lines (longitude), a line should be shown for every coordinate dividable by the result of this
     *     function. For example, if the result is 45, a line should be shown for longitudes -180, -135, -90, -45, 0, 45, 90, 135, 180.
     *     For variable distance lines (latitude), a line should be shown for coordinates dividable by a result of this function, but
     *     not for every single coordinate but only those that have a minimum distance towards their neighbour coordinate line. For
     *     variable distance lines, the maximum number returned by this function is 5, meaning at low zoom levels, all latitude lines
     *     are dividable by 5 (but not every latitude dividable by 5 will get a line).
     */
    static getGridDivisor(number: number, variableDistance: boolean): number;
    static niceRound: typeof AutoGraticule.getGridDivisor;
    static bboxIntersect(bbox1: LatLngBounds | LatLngExpression[], bbox2: LatLngBounds | LatLngExpression[]): LatLngBounds;
}
export default AutoGraticule;

export declare interface AutoGraticuleOptions extends LayerOptions {
    redraw: keyof LeafletEventHandlerFnMap;
    /** Minimum distance between two lines in pixels */
    minDistance: number;
}

export { }
