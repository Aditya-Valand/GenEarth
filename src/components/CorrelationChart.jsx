import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import Papa from 'papaparse';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, ChartDataLabels);

const CorrelationChart = ({ csvFilePath }) => {
  const [correlationData, setCorrelationData] = useState(null);
  const [loading, setLoading] = useState(true);

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

        const data = results.data;
        const numericColumns = Object.keys(data[0]).filter(key => !isNaN(parseFloat(data[0][key])));
        
        if (numericColumns.length < 2) {
          console.error('Not enough numeric columns for correlation calculation.');
          setLoading(false);
          return;
        }

        const correlationMatrix = calculateCorrelation(data, numericColumns);
        const chartData = prepareChartData(correlationMatrix, numericColumns);
        
        setCorrelationData(chartData);
        setLoading(false);
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
        setLoading(false);
      },
    },[calculateCorrelation]);
  }, [csvFilePath]);

  const calculateCorrelation = (data, columns) => {
    const matrix = new Array(columns.length).fill(null).map(() => new Array(columns.length).fill(0));
  
    for (let i = 0; i < columns.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        if (i === j) {
          matrix[i][j] = 1; // Correlation of a variable with itself is always 1
        } else if (i < j) {
          const correlation = pearsonCorrelation(data, columns[i], columns[j]);
          matrix[i][j] = correlation;
          matrix[j][i] = correlation; // Mirror the correlation value
        }
      }
    }
    return matrix;
  };

  const pearsonCorrelation = (data, col1, col2) => {
    const values1 = data.map(row => parseFloat(row[col1])).filter(val => !isNaN(val));
    const values2 = data.map(row => parseFloat(row[col2])).filter(val => !isNaN(val));
    
    if (values1.length === 0 || values2.length === 0) return 0;

    const mean1 = values1.reduce((a, b) => a + b, 0) / values1.length;
    const mean2 = values2.reduce((a, b) => a + b, 0) / values2.length;
    const variance1 = values1.reduce((a, b) => a + Math.pow(b - mean1, 2), 0);
    const variance2 = values2.reduce((a, b) => a + Math.pow(b - mean2, 2), 0);
    const covariance = values1.reduce((a, b, i) => a + (b - mean1) * (values2[i] - mean2), 0);
    
    return covariance / Math.sqrt(variance1 * variance2);
  };

  const prepareChartData = (matrix, labels) => ({
    labels,
    datasets: [{
      label: 'Correlation Heatmap',
      data: matrix.flatMap((row, i) => 
        row.map((value, j) => ({ x: labels[j], y: labels[i], v: value }))
      ),
      backgroundColor: (context) => {
        const value = context.raw.v;
        const red = value > 0 ? Math.round(255 * value) : 255;
        const blue = value < 0 ? Math.round(255 * -value) : 255;
        const green = Math.round(255 * (1 - Math.abs(value)));
        return `rgba(${red}, ${green}, ${blue}, 0.8)`;
      },
      pointRadius: 20,
    }],
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
     
      {correlationData && (
        <Scatter
          data={correlationData}
          options={{
            scales: {
              x: { type: 'category', labels: correlationData.labels },
              y: { type: 'category', labels: correlationData.labels, reverse: true },
            },
            plugins: {
              datalabels: {
                display: true,
                color: 'black',
                formatter: (value, context) => value.v.toFixed(2),
              },
              tooltip: {
                callbacks: {
                  label: (context) => `Correlation: ${context.raw.v.toFixed(2)}`,
                },
              },
            },
            responsive: true,
          }}
        />
      )}
    </div>
  );
};

export default CorrelationChart;
