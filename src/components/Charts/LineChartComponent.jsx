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


const LineChartComponent = (props) => {
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
                    data={props.data}
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


LineChartComponent.defaultProps = {
    data: [],
}


export default LineChartComponent;
