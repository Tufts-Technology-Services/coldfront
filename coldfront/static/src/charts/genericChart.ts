export interface GenericChartData {
  data: Map<string, [number | string, number | string]>;
}

export function renderGenericChart(
  id: string,
  url: string,
  chartFunc: (canvas: HTMLCanvasElement, data: GenericChartData) => void
): void {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  if (canvas !== null) {
    fetchGenericChartData(url)
      .then((data) => {
        chartFunc(canvas, data);
      })
      .catch((error: unknown) => {
        console.log('Error loading chart data: ' + error);
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = 'red';
          ctx.font = '16px Arial';
          ctx.fillText('Error loading chart data', 10, 15);
        }
      });
  }
}

export async function fetchGenericChartData(
  url: string
): Promise<GenericChartData> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GenericChartData = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}