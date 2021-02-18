import React, { Fragment } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import {
    LineChart,
    Line,
    YAxis,
    Label,
    ResponsiveContainer,
    Tooltip
} from 'recharts';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';

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

// Generate Sales Data
const createData = (time, amount) => ({ time, amount });

const data = [
    createData('00:00', 300),
    createData('01:00', 350),
    createData('02:00', 280),
    createData('03:00', 380),
    createData('04:00', 350),
    createData('05:00', 700),
    createData('07:00', 400),
    createData('08:00', 450),
    createData('09:00', 280),
    createData('10:00', 350),
    createData('11:00', 280),
];

const LineChartComponent = () => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.chartHeader}>
                <Typography
                    className={classes.textHeader}
                    component="h2"
                    variant="h6"
                    gutterBottom
                >
                    Report
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
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    width={300} height={300}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </Fragment>
    );
};

export default LineChartComponent;
