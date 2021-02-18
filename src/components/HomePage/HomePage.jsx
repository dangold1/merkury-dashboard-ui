import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import LineChartComponent from '../Charts/LineChartComponent';
import PieChartComponent from '../Charts/PieChartComponent';
import { Container, Grid, Paper } from '@material-ui/core';
import NotesList from '../NotesList/NotesList';

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
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
}));


const HomePage = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>

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
                        <Paper className={classes.paper}>
                            <NotesList />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <NotesList />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={classes.paper}>
                            <NotesList />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default HomePage;