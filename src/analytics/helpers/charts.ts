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
  chartOptions,
  legendMargin
}