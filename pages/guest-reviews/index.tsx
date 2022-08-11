
import { Box } from '@material-ui/core'
import React from 'react'
import Header from 'src/components/modules/AccountSetting/Header'
import HostReviewBody from '../../components/modules/GuestReviewBody'
import {useStyles} from '../../components/modules/GuestReviewBody/styles2'

const index = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <br />
            <Box className={classes.HeaderClass}>
            <Header head={"Review your stay"} button={"Send review"}/>
            </Box>

            <HostReviewBody />
        </React.Fragment>
    )
}

export default index