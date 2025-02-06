import React, { useState } from "react";
import { useEffect } from "react";

import html2canvas from "html2canvas";

import {
  Bar,
  Line,
  Doughnut,
  Scatter,
  Radar,
  Pie,
  Bubble,
  PolarArea,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const [chartLabel, setChartLabel] = useState("Growth");
  const [labels, setLabels] = useState(["2022", "2023", "2024", "2025"]);
  const [data, setData] = useState([0, 3, 5, 10]);
  const [colors, setColors] = useState([
    "#4BC0C0",
    "#9C63FF",
    "#36A2EB",
    "#FFCE56",
  ]);
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newColor, setNewColor] = useState("#000000");
  const [chartType, setChartType] = useState("bar");
  const [filled, setFilled] = useState(false);

  const handleAddData = () => {
    if (newLabel.trim() && newValue.trim()) {
      setLabels([...labels, newLabel]);
      setData([...data, Number(newValue)]);
      setColors([...colors, newColor]);
      setNewLabel("");
      setNewValue("");
      setNewColor("#000000");
    } else {
      alert("Please enter both a label, a value, and select a color.");
    }
  };

  const handleDeleteData = () => {
    if (labels.length > 0) {
      setLabels(labels.slice(0, -1));
      setData(data.slice(0, -1));
      setColors(colors.slice(0, -1));
    }
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: chartLabel,
        data: data,
        fill: filled,
        backgroundColor: colors,
        borderColor: colors.map((color) => color.replace("0.1", "1")),
      },
    ],
  };

  const chartComponents = {
    bar: <Bar data={chartData} />,
    line: <Line data={chartData} />,
    doughnut: <Doughnut data={chartData} />,
    scatter: <Scatter data={chartData} />,
    radar: <Radar data={chartData} />,
    pie: <Pie data={chartData} />,
    bubble: <Bubble data={chartData} />,
    polarArea: <PolarArea data={chartData} />,
  };

  const handleDownload = () => {
    const chartElement = document.getElementById("chart-container");

    if (!chartElement) {
      console.error("Chart element not found!");
      return;
    }

    setTimeout(() => {
      html2canvas(chartElement, { scale: 2 })
        .then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "chart.png";
          link.click();
        })
        .catch((error) => {
          console.error("Error capturing the chart: ", error);
        });
    }, 500); // Adding delay to ensure the element is available
  };

  useEffect(() => {
    const chartContainer = document.getElementById("chart-container");

    if (chartContainer) {
      chartContainer.addEventListener("contextmenu", (e) => {
        e.preventDefault(); // Disable right-click
      });
    }

    return () => {
      if (chartContainer) {
        chartContainer.removeEventListener("contextmenu", (e) => {
          e.preventDefault();
        });
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "80%",
        margin: "50px auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <a
        href="/"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          padding: "10px 20px",
          backgroundColor: "#ff6384",
          color: "#fff",
          borderRadius: "25px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "0.3s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#36a2eb")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6384")}
      >
        Home
      </a>

      <a
        href="/compare" // Update the link to the page you want to navigate to
        style={{
          position: "fixed",
          top: "10px", // Change the position to the bottom for the opposite direction
          right: "10px", // Change position to the right
          padding: "10px 20px",
          backgroundColor: "#8a2be2", // Use the purple color you selected
          color: "#fff",
          borderRadius: "25px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "0.3s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#6a1ebe")} // Hover effect with darker purple shade
        onMouseOut={(e) => (e.target.style.backgroundColor = "#8a2be2")}
      >
        Compare
      </a>

      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          color: "#ff6384",
        }}
      >
        Chart Wise
      </h1>

      <label style={{ fontSize: "18px", color: "#333" }}>Chart Label:</label>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Chart Label"
          value={chartLabel}
          onChange={(e) => setChartLabel(e.target.value)}
          style={{
            padding: "10px",
            width: "45%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
          }}
        />
        {/* <button
          onClick={() => setFilled(!filled)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#36a2eb",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
          }}
        >
          Toggle Fill
        </button> */}
      </div>

      <label style={{ fontSize: "18px", color: "#333" }}> Data Point:</label>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="New Label"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          style={{
            padding: "10px",
            width: "30%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "rgba(54, 162, 235, 0.1)",
          }}
        />
        <input
          type="number"
          placeholder="New Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          style={{
            padding: "10px",
            width: "30%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "rgba(255, 206, 86, 0.1)",
          }}
        />
        <input
          type="color"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          style={{
            padding: "10px",
            width: "5%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "rgba(255, 99, 132, 0.1)",
          }}
        />
        <button
          onClick={handleAddData}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffce56",
            color: "#333",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Data
        </button>
        <button
          onClick={handleDeleteData}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6384",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
        >
          Remove Last
        </button>
      </div>

      <div
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label style={{ fontSize: "25px", color: "#36a2eb" }}>Data Sets</label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}>
        {data.map((value, index) => (
          <div key={index} style={{ margin: "10px", width: "30%" }}>
            <input
              type="text"
              value={labels[index]}
              onChange={(e) => {
                const updatedLabels = [...labels];
                updatedLabels[index] = e.target.value;
                setLabels(updatedLabels);
              }}
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "rgba(255, 99, 132, 0.1)",
              }}
            />
            <input
              type="number"
              value={data[index]}
              onChange={(e) => {
                const updatedData = [...data];
                updatedData[index] = Number(e.target.value);
                setData(updatedData);
              }}
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "rgba(54, 162, 235, 0.1)",
              }}
            />
            <label style={{ fontSize: "15px", color: colors[index] }}>
              Color :{" "}
            </label>
            <input
              type="color"
              value={colors[index]}
              onChange={(e) => {
                const updatedColors = [...colors];
                updatedColors[index] = e.target.value;
                setColors(updatedColors);
              }}
              style={{
                padding: "10px",
                width: "20%",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "rgba(255, 206, 86, 0.1)",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label style={{ fontSize: "25px", color: "#ff6384" }}>Charts</label>
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {Object.keys(chartComponents).map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: chartType === type ? "#36a2eb" : "#ff6384",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              if (chartType !== type)
                e.target.style.backgroundColor = "#36a2eb";
            }}
            onMouseOut={(e) => {
              if (chartType !== type)
                e.target.style.backgroundColor = "#ff6384";
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label style={{ fontSize: "30px", color: "#ffce56" }}>Preview</label>
      </div>

      <div
        style={{
          marginTop: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          width: "90%", // Ensures chart takes up full available width
          height: "400px", // Allows height to adapt based on the chart content
          maxWidth: "100%", // Ensures it doesn't exceed screen width on mobile
          margin: "0 auto", // This is the key to center the chart
          overflow: "hidden", // Ensures content doesn't overflow out of the container
          display: "block", // Ensures block-level element for correct centering
        }}
        id="chart-container"
        className="chart-wrapper"
      >
        {chartComponents[chartType]}
      </div>

      <button
        onClick={handleDownload}
        className="download-btn"
        style={{
          padding: "10px 20px",
          backgroundColor: "#36a2eb",
          color: "#fff",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
          fontWeight: "bold",
          display: "block",
          margin: "20px auto",
        }}
      >
        Download Chart
      </button>
    </div>
  );
};

export default Charts;
