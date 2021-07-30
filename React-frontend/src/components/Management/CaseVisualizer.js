/*
    Component to Visualize a case data.
*/

// Importing depedencies
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useParams } from 'react-router-dom';
import {
    Container,
    Typography,
    Divider,
    Button,
    Grid,
    List,
    ListItem,
} from '@material-ui/core';


// custom styles
const useStyle = makeStyles((theme) => ({
    root: {
        width: '80vw',
        overflowX: 'auto',
        marginTop: '10vh',
        height: '82.5vh',
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: '.9rem',
        fontWeight: 'bolder',
        '&:focus': {
            outline: 'none'
        }
    },
    sideBarStyles: {
        height: '70vh',
        border: "1px solid #000",
        backgroundColor: '#fff'
    },
    reportSection: {
        height: '70vh',
        border: '1px solid #000'
    },
    activeItem: {
        backgroundColor: '#f4f4f4'
    }
}))

function CaseVisaulizer() {

    // invoke custom styles
    const classes = useStyle()

    // Params
    const params = useParams()

    // Destructuring params
    const { caseName } = params

    // History
    const history = useHistory()

    // state variables
    const [ reportOption, setReportOption ] = useState('generalInfo')

    useEffect(() => {
        console.log(reportOption)
    }, [reportOption])

    // Main return statement
    return (
        <Container component="main" className={classes.root}>

            {/* Header */}
            <Typography component="h1" variant="h5">
                <Button className={classes.title} onClick={() => history.goBack()}>
                    Case Report
                </Button> &gt;
                <Button className={classes.title} style={{fontWeight: 'normal'}}>
                    {caseName}
                </Button>
            </Typography>

            {/* Divider */}
            <Divider style={{width: '100%', marginTop: '1em'}} />

            <Grid container>
                {
                    // Grid to show case report options
                    (
                        <Grid item sm={2} className={classes.sideBarStyles}>
                            <List component="nav" aria-label="report options">
                                <ListItem button className={(reportOption==='generalInfo')? classes.activeItem : null } onClick={() => setReportOption('generalInfo')}>General Info</ListItem>
                                <ListItem button className={(reportOption==='location')? classes.activeItem : null } onClick={() => setReportOption('location')}>Location</ListItem>
                                <ListItem button className={(reportOption==='kdfjdkf')? classes.activeItem : null } onClick={() => setReportOption('kdfjdkf')}>kdfjdkf</ListItem>
                                <ListItem button className={(reportOption==='jdkfjdkfd')? classes.activeItem : null } onClick={() => setReportOption('jdkfjdkfd')}>jdkfjdkfd</ListItem>
                            </List>
                        </Grid>
                    )
                }
                {
                    // Grid to show case report/ data Visualization
                    (
                        <Grid item sm={10} className={classes.reportSection}>
                            {reportOption}
                        </Grid>
                    )
                }
            </Grid>

        </Container>
    )
}

export default CaseVisaulizer
