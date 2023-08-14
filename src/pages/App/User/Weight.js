import styled from "styled-components";

import { useState, useEffect } from "react";

import Chart from "chart.js/auto";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
  } from 'chart.js'

import LineChart from "../../../components/LineChart";

Chart.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
    );

export default function Weight(props) {
    const { weightData } = props;
    const [chartData, setChartData] = useState({})
    const [hasData, setHasData] = useState(false)

    useEffect(() => {
        if(weightData){
            setChartData({
                labels: weightData.slice(-4).map((data) => data.createdAt.toString().split('').splice(2, 8).join('')), 
                datasets: [
                  {
                    label: 'peso',
                    data: weightData.slice(-4).map((data) => data.value),
                    borderColor: 'black'
                  },
                ]
            })
            setHasData(true)
        }
    }, [weightData])

    console.log(chartData);
    return (
        <>
            <MainWeight>
                {weightData[0] ? weightData[weightData.length-1].value + 'kg' : '-'}
            </MainWeight>
            <div>
                {hasData ? <LineChart chartData={chartData} /> : '-'}
            </div>
        </>
    )
}

const MainWeight = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: .9rem;
`

