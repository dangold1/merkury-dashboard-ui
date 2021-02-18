import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import LineChartComponent from '../components/Charts/LineChartComponent';
import PieChartComponent from '../components/Charts/PieChartComponent';
import { Grid, Paper } from '@material-ui/core';
import NotesList from '../components/NotesList/NotesList';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    borderPaper:{
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        border: '1px solid #e8ebf0'
    }
}));


const HomePage = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Fragment>
            {/* LineChart */}
            <Grid container spacing={5}>
                <Grid item xs={12} md={5} lg={5}>
                    <Paper className={fixedHeightPaper}>
                        <PieChartComponent />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={7} lg={7}>
                    <Paper className={fixedHeightPaper}>
                        <LineChartComponent />
                    </Paper>
                </Grid>
            </Grid>

            {/* Notes Lists */}
            <Grid container spacing={5}>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper elevation={0} className={classes.borderPaper}>
                        <NotesList />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper elevation={0} className={classes.borderPaper}>
                        <NotesList />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper elevation={0} className={classes.borderPaper}>
                        <NotesList />
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default HomePage;