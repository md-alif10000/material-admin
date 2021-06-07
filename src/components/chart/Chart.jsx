import './chart.css'
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 2000,
  },
  {
    name: "April",
    "Active User": 2780,
  },
  {
    name: "May",
    "Active User": 1890,
  },
  {
    name: "June",
    "Active User": 2390,
  },
  {
    name: "July",
    "Active User": 3490,
  },
  {
    name: "Aug",
    "Active User": 3490,
  },
  {
    name: "Sep",
    "Active User": 3000,
  },
  {
    name: "Oct",
    "Active User": 3490,
  },
  {
    name: "Nov",
    "Active User": 490,
  },
  {
    name: "Dec",
    "Active User": 2490,
  },
];

export default function Chart({title,data,dataKey,grid,dataKeyLine}) {
    return (
      <div className="chart">
            <h3 className="chartTitle">{ title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey={dataKey} stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKeyLine} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid strokeDasharray={5.5} />}

            <YAxis />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}
