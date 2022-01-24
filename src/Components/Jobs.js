import React, { useContext } from 'react'

import { Grid } from '@mui/material';

import JobComp from './JobComp';
import MediaContext from '../Context/MediaContext';

const Jobs = ({ jobs_list }) => {


    const matches = useContext(MediaContext) 

    // iterating over the jobs data list taken as a prop (mimicing Redux behaviour) and displaying each Job 
    return (
        <div style={{ padding: "10px 5px", backgroundColor: "#EFEFEF", borderRadius:"12px 12px 0 0" }}>
            <Grid sx={{display: "flex", justifyContent: "center"}} container spacing={matches ? 0 : 1}>
                {
                    jobs_list.map((job, i) => {
                        return (
                            <JobComp key={i} job={job} />
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Jobs