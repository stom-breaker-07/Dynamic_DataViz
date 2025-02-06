import React, { useRef, useState } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,    // Required for Line chart
  PointElement,   // Required for Line chart
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

// Register all necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,    // Added for Line chart
  PointElement, 
  ArcElement,  
  Title,
  Tooltip,
  Legend
);

const DynamicChart = () => {
  const chartRef = useRef();
  const [chartType, setChartType] = useState('bar'); // Default chart type
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Sales Data',
        data: [65, 59, 80],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  });

  // Add data dynamically
  const addData = () => {
    const newLabel = prompt('Enter label for new data point:');
    const newValue = parseInt(prompt('Enter value for new data point:'), 10);
    const newColor = prompt('Enter color (hex or valid CSS color):', '#ff5722');

    if (newLabel && !isNaN(newValue) && newColor) {
      setChartData((prevData) => ({
        ...prevData,
        labels: [...prevData.labels, newLabel],
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: [...dataset.data, newValue],
          backgroundColor: [...dataset.backgroundColor, newColor],
        })),
      }));
    }
  };

  // Remove last data point
  const removeData = () => {
    setChartData((prevData) => ({
      ...prevData,
      labels: prevData.labels.slice(0, -1),
      datasets: prevData.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.slice(0, -1),
        backgroundColor: dataset.backgroundColor.slice(0, -1),
      })),
    }));
  };

  // Download chart as an image
  const handleDownload = () => {
    const chart = chartRef.current.chartInstance;
    const imageURL = chart.toBase64Image();
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'chart.png';
    link.click();
  };

  // Render chart dynamically based on type
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <Line ref={chartRef} data={chartData} />;
      case 'doughnut':
        return <Doughnut ref={chartRef} data={chartData} />;
      default:
        return <Bar ref={chartRef} data={chartData} />;
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Dynamic Chart</h2>
      <div>
        <button onClick={() => setChartType('bar')}>Bar Chart</button>
        <button onClick={() => setChartType('line')}>Line Chart</button>
        <button onClick={() => setChartType('doughnut')}>Doughnut Chart</button>
      </div>
      <div style={{ marginTop: '20px' }}>{renderChart()}</div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={addData}>Add Data</button>
        <button onClick={removeData}>Remove Data</button>
        <button onClick={handleDownload}>Download Chart</button>
      </div>
    </div>
  );
};

export default DynamicChart;
