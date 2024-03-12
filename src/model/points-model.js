import { getMockPoint } from '../mock/waypoint.js';

const TASK_COUNT = 5;

export default class PointsModel {
  points = Array.from({ length: TASK_COUNT }, () => getMockPoint());

  getPoints() {
    return this.points;
  }
}
