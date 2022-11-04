const chartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        '#1E40AF',
        '#1D4ED8',
        '#2563EB',
        '#3B82F6',
        '#60A5FA',
      ],
      borderColor: [
        '#60A5FA',
        '#60A5FA',
        '#60A5FA',
        '#60A5FA',
        '#60A5FA',
      ],
      borderWidth: 1,
    },
  ],
};

const legendMargin = {
  id: "legendMargin",
  beforeInit: (chart: any) => {
    const fitValue = chart.legend.fit;

    chart.legend.fit = function fit() {
      fitValue.bind(chart.legend)();
      return (this.height += 40);
    };
  }
};

const chartOptions = {
  plugins: {
    legend: {
      labels: {
        color: 'white'
      }
    }
  }
}

export {
  chartData,
  chartOptions,
  legendMargin
}