import Plot from "react-plotly.js";

type PLOT_CHART_PROPS = {
  xAxis: number[] | string[];
  yAxis: number[];
};

const PlotChart = (props: PLOT_CHART_PROPS) => {
  const { xAxis, yAxis } = props;

  return (
    <div className="flex items-center justify-center  border border-black w-fit ">
    <Plot
      data={[
        {
          x: xAxis,
          y: yAxis,
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        {
          type: "bar",
          x: xAxis,
          y: yAxis,
        },
      ]}
      layout={{ height: 500, title: "Product Prices" }}
    /></div>
  );
};

export default PlotChart;
