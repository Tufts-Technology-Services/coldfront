import Chart from 'chart.js/auto';
import { ColorPalette } from './data';
import { renderGenericChart } from './genericChart';
import type { GenericChartData } from './genericChart';

export function initStorageHistoryChart(elId: string, url: string): void {
  renderGenericChart(elId, url, createStorageHistoryChart);
}

function createStorageHistoryChart(
  canvas: HTMLCanvasElement,
  chartData: GenericChartData
): void {
  const labels = chartData.data.get('labels');
  const quotaHistory = {
    label: 'Quota',
    data: chartData.data.get('quota_history'),
    fill: false,
    stepped: true,
    borderColor: ColorPalette.PRIMARY[0],
  };
  const usageHistory = {
    label: 'Usage',
    data: chartData.data.get('usage_history'),
    fill: false,
    stepped: false,
    borderColor: ColorPalette.PRIMARY[1],
  };
  new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [quotaHistory, usageHistory],
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        axis: 'x',
      },
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: false,
        },
      },
    },
  });
}
