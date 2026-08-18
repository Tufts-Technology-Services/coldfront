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
  const datasets = chartData.datasets;
  datasets[0]['type'] = 'line';
  datasets[0]['fill'] = false;
  datasets[0]['stepped'] = true;
  datasets[0]['borderColor'] = ColorPalette.PRIMARY[0];
  datasets[1]['type'] = 'line';
  datasets[1]['fill'] = false;
  datasets[1]['stepped'] = false;
  datasets[1]['borderColor'] = ColorPalette.PRIMARY[1];

  new Chart(canvas, {
    type: 'line',
    data: {
      datasets: datasets,
    },
    options: {
      responsive: true,
      scales: {
        x: { type: 'time' },
      },
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
