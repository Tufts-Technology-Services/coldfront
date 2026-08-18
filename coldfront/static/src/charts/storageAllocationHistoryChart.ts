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
  datasets[0].data.set('type', 'line');
  datasets[0].data.set('fill', false);
  datasets[0].data.set('stepped', true);
  datasets[0].data.set('borderColor', ColorPalette.PRIMARY[0]);
  datasets[1].data.set('type', 'line');
  datasets[1].data.set('fill', false);
  datasets[1].data.set('stepped', false);
  datasets[1].data.set('borderColor', ColorPalette.PRIMARY[1]);

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
