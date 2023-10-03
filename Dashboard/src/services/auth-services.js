import axios from 'axios';
const apiUrl = `http://137.59.224.25:8080/api`;

export function getFirstGraphData() {
  return axios({
    method: 'GET',
    url: `${apiUrl}/data_scientist_jobs_per_state`
  });
}
export function getSecondGraphData() {
  return axios({
    method: 'GET',
    url: `${apiUrl}/data_scientist_jobs_by_industry`
  });
}
export function getThirdGraphData() {
  return axios({
    method: 'GET',
    url: `${apiUrl}/salary_forecast`
  });
}