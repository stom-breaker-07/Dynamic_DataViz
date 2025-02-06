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
  const [chartLabel, setChartLabel] = useState("A");
  const [chartLabel2, setChartLabel2] = useState("B");

  const [data, setData] = useState([1, 3, 5, 7]);
  const [data2, setData2] = useState([2, 4, 6, 8]);

  const [newValue, setNewValue] = useState("");
  const [newValue2, setNewValue2] = useState("");

  const [labels, setLabels] = useState(["2022", "2023", "2024", "2025"]);

  const [newLabel, setNewLabel] = useState("");

  const [colors, setColors] = useState([
    "#4BC0C0"
  ]);
  const [colors2, setColors2] = useState([
    "#9C63FF"
  ]);


  const [chartType, setChartType] = useState("bar");
  const [filled, setFilled] = useState(false);

  const handleAddData = () => {
    if (newLabel.trim() && newValue.trim() && newValue2.trim()) {
      setLabels([...labels, newLabel]);
      setData([...data, Number(newValue)]);
      setData2([...data2, Number(newValue2)]);
      setColors(colors);
      setColors2(colors2);
      setNewLabel("");
      setNewValue("");
      setNewValue2("");
    } else {
      alert("Please enter both a label, a value, and select a color.");
    }
  };

  const handleDeleteData = () => {
    if (labels.length > 0) {
      setLabels(labels.slice(0, -1));

      setData(data.slice(0, -1));
      setData2(data2.slice(0, -1));

    }
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: chartLabel,
        data: data,
        fill: true,
        backgroundColor: colors,
        borderColor: colors,
      },
      {
        label: chartLabel2,
        data: data2,
        fill: true,
        backgroundColor: colors2,
        borderColor: colors2,
      }
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
    }, 500); 
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
        backgroundColor:  'rgba(102, 54, 235, 0.1)',
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
          backgroundColor: "#8a2be2",
          color: "#fff",
          borderRadius: "25px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "0.3s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#36a2eb")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#8a2be2")}
      >
        Home
      </a>

      <a
        href="/charts" // Update the link to the page you want to navigate to
        style={{
          position: "fixed",
          top: "10px", // Change the position to the bottom for the opposite direction
          right: "10px", // Change position to the right
          padding: "10px 20px",
          backgroundColor: "#ff6384", // Use the purple color you selected
          color: "#fff",
          borderRadius: "25px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "0.3s",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#6a1ebe")} // Hover effect with darker purple shade
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6384")}
      >
        Chart
      </a>

      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          color:  "#8a2be2",
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
          placeholder="Data A"
          value={chartLabel}
          onChange={(e) => setChartLabel(e.target.value)}
          style={{
            padding: "10px",
            width: "45%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor:'rgba(102, 54, 235, 0.1)',
          }}
        />
        <input
          type="text"
          placeholder="Data B"
          value={chartLabel2}
          onChange={(e) => setChartLabel2(e.target.value)}
          style={{
            padding: "10px",
            width: "45%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: 'rgba(102, 54, 235, 0.1)',
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
          type="number"
          placeholder="New Value"
          value={newValue2}
          onChange={(e) => setNewValue2(e.target.value)}
          style={{
            padding: "10px",
            width: "30%",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundColor: "rgba(255, 206, 86, 0.1)",
          }}
        />
        <button
          onClick={handleAddData}
          style={{
            marginTop: "10px",
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
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#9c63ff",
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
      <label style={{ fontSize: "25px", color: "#36a2eb" }}>Data Sets </label>
      </div>
      <label style={{ fontSize: "15px", color: colors }}>
              Color :{" "}
      </label>
      <label style={{ fontSize: "15px", color: colors }}>
      <input
              type="color"
              value={colors}
              onChange={(e) => {
                const updatedColors = e.target.value;
                setColors(updatedColors);
              }}
              style={{
                padding: "10px",
                width: "7%",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "rgba(54, 162, 235, 0.1)",
              }}
            />
      </label>
            
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
                backgroundColor: 'rgba(102, 54, 235, 0.1)',
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
          </div>
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
      <label style={{ fontSize: "25px", color: "#36a2eb" }}>Data Sets 2</label>
      </div>
      <label style={{ fontSize: "15px", color: colors2 }}>
              Color :{" "}
      </label>
      <label style={{ fontSize: "15px", color: colors2 }}>
      <input
              type="color"
              value={colors2}
              onChange={(e) => {
                const updatedColors2 = e.target.value;
                setColors2(updatedColors2);
              }}
              style={{
                padding: "10px",
                width: "7%",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: 'rgba(102, 54, 235, 0.1)',
              }}
            />
      </label>
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}>
        {data2.map((value, index) => (
          <div key={index} style={{ margin: "10px", width: "30%" }}>
            <input
              type="text"
              value={labels[index]}
              onChange={(e) => {
                const updatedLabels2 = [...labels];
                updatedLabels2[index] = e.target.value;
                setLabels(updatedLabels2);
              }}
              style={{
                padding: "10px",
                width: "100%",
                marginBottom: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: 'rgba(102, 54, 235, 0.1)',
              }}
            />
            <input
              type="number"
              value={data2[index]}
              onChange={(e) => {
                const updatedData2 = [...data2];
                updatedData2[index] = Number(e.target.value);
                setData2(updatedData2);
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
              backgroundColor: chartType === type ? "#36a2eb" : "#9c63ff",
              color: "#fff",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              if (chartType !== type)
                e.target.style.backgroundColor = "#b13bff";
            }}
            onMouseOut={(e) => {
              if (chartType !== type)
                e.target.style.backgroundColor = "#9c63ff";
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
