import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import Papa from 'papaparse';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterPlot = ({ csvFilePath }) => {
  const [data, setData] = useState([]);
  const [features, setFeatures] = useState([]);
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);

  useEffect(() => {
    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      complete: (results) => {
        if (results.data.length === 0) {
          console.error('No data found in the CSV file.');
          setLoading(false);
          return;
        }

        setData(results.data);
        const numericColumns = Object.keys(results.data[0]).filter(key => !isNaN(parseFloat(results.data[0][key])));
        
        if (numericColumns.length < 2) {
          console.error('Not enough numeric columns for scatter plot.');
          setLoading(false);
          return;
        }

        setFeatures(numericColumns);
        setXAxis(numericColumns[0]);
        setYAxis(numericColumns[1]);
        setLoading(false);
      }
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [csvFilePath]);

  const chartData = {
    datasets: [{
      label: 'Data Points',
      data: data.map(row => ({
        x: parseFloat(row[xAxis]),
        y: parseFloat(row[yAxis]),
      })).filter(point => !isNaN(point.x) && !isNaN(point.y)),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      pointRadius: 5, // Display the points
    }],
  };

  // Show loading until data is available
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      
      <div>
        <label>X-Axis: </label>
        <select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
          {features.map(feature => (
            <option key={feature} value={feature}>{feature}</option>
          ))}
        </select>
        <label> Y-Axis: </label>
        <select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
          {features.map(feature => (
            <option key={feature} value={feature}>{feature}</option>
          ))}
        </select>
      </div>
      <Scatter
        ref={chartRef}
        data={chartData}
        options={{
          scales: {
            x: { 
              title: { display: true, text: xAxis },
              ticks: { callback: (value) => value.toFixed(2) }
            },
            y: { 
              title: { display: true, text: yAxis },
              ticks: { callback: (value) => value.toFixed(2) }
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              callbacks: {
                label: (context) => {
                  const xValue = context.raw.x.toFixed(2);
                  const yValue = context.raw.y.toFixed(2);
                  return [`X: ${xValue}`, `Y: ${yValue}`];
                },
              },
            },
          },
          // Hide point labels by default
          plugins: {
            datalabels: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default ScatterPlot;