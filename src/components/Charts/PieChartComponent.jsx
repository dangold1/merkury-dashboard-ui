import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chart from "react-apexcharts";
import { Button, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    chartHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textHeader: {
        marginLeft: 25,

    },
    button: {
        borderRadius: 25,
        marginRight: 10,
        textTransform: 'unset !important',
        backgroundColor: 'white',
    },
}));

const optionsState = {
    chart: {
        type: 'donut',
    },
    colors: ['#25396e', '#5584ff', '#4b74e0', '#4164c2', '#3755a4'],
    labels: ["Websites", "Logo", "Social Media", "Adwords", "E-commerce"],
    dataLabels: {
        enabled: false,
    },
    stroke: { width: 0 },
    plotOptions: {
        pie: {
            donut: {
                size: '50%',
                background: 'transparent',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Sales',
                        formatter: (w) => {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        }
                    }
                }
            },
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom'
            }
        }
    }]
};


const PieChartComponent = () => {
    const classes = useStyles();
    const [series, setSeries] = useState([44, 55, 41, 17, 15]);
    const [options, setOptions] = useState(optionsState);
    return (
        <div id="chart">
            <div className={classes.chartHeader}>
                <Typography
                    className={classes.textHeader}
                    component="h2"
                    variant="h6"
                    gutterBottom
                >
                    Your Sales
                </Typography>
                <Button
                    className={classes.button}
                    variant="contained"
                    endIcon={<ArrowDropDownIcon />}
                    align="right"
                >
                    Period: Last Year
                </Button>
            </div>
            <Chart
                options={options}
                series={series}
                type="donut"
                width={325}
                height={180}
            />
        </div>
    )
}

export default PieChartComponent;