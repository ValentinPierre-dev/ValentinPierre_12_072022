const baseURL = "http://localhost:3000/user/";

// Get data from API
export class Api {
  constructor(id, userId) {
    this.id = id;
    this.userId = userId;
  }

  async getMainData(id) {
    const response = await fetch(baseURL + id);

    if (!response.ok && response.status === 404) {
      throw new Error("User not found");
    }

    if (!response.ok && response.status >= 500) {
      throw new Error("server error");
    }

    const userData = await response.json();

    return userData.data;
  }

  async getUserActivity(userId) {
    const response = await fetch(baseURL + userId + "/activity");

    const activityData = await response.json();

    return activityData.data;
  }

  async getUserAverage(userId) {
    const response = await fetch(baseURL + userId + "/average-sessions");

    const averageData = await response.json();

    return averageData.data;
  }

  async getUserPerformance(userId) {
    const response = await fetch(baseURL + userId + "/performance");

    const performanceData = await response.json();

    return performanceData.data;
  }
}
