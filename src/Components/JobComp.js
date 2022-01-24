import React, { useState, useContext } from 'react'

import { Grid, Typography } from '@mui/material';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MediaContext from '../Context/MediaContext';

// A responsive component to display each job 
const JobComp = ({ job }) => {

    const matches = useContext(MediaContext) 

    const [jobSaved, setJobSaved] = useState(job.saved) // state to check if the job is already saved or not

    const containerStyles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "15px",
        height: matches? "fit-content" : "90%",
        border: "solid 1px grey",
        borderRadius: "12px",
        backgroundColor: "white",
    }

    // function to handle the save-icon click to save or unsave the job
    const handleJobSave = (variant) => {

        // when user saves the job
        if (jobSaved === false) {
            setJobSaved(true)

            toast.success(`${job.title} job in ${job.location} was saved to your list`, {
                position: matches? "bottom-center" : "bottom-left",
                autoClose: 6000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        // when user un-saves the job
        else{
            // when the warning toast is to be shown
            if(variant === "warn"){
                setJobSaved(false)

                toast.warn("Warning, the job will not be available later", {
                    position: matches? "bottom-center" : "bottom-left",
                    autoClose: 6000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:"colored",
                });
            }
            // when the error toast is to be shown
            else if(variant === "error"){
                toast.error("Something went wrong while unsaving this job", {
                    position: matches? "bottom-center" : "bottom-left",
                    autoClose: 6000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:"colored",
                });
            }
        }
    }

    return (
        <Grid item xs={12} sm={6} lg={3} style={{ margin: "5px" }}>
            <div style={containerStyles}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <img alt="" src={job.imgURL} width="50px" height="50px" style={{ marginRight: "15px" }} />

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography style={{ fontFamily: "Montserrat", fontSize: "18px", fontWeight: 600, marginBottom: "10px" }}>
                            {job.title}
                        </Typography>
                        <Typography style={{ fontFamily: "Montserrat", fontSize: "15px", fontWeight: 400, marginBottom: "10px" }}>
                            {job.location}
                        </Typography>
                        {
                            matches ? null :
                                <Typography style={{ fontFamily: "Montserrat", fontSize: "14px", fontWeight: 400, marginBottom: "10px" }}>
                                    {job.description}
                                </Typography>
                        }
                    </div>
                </div>

                {
                    jobSaved ? <BookmarkAddedIcon onClick={() => handleJobSave(job.variant)} />
                        : <BookmarkAddOutlinedIcon onClick={() => handleJobSave(job.variant)} />
                }
            </div>

            <ToastContainer
                position={matches? "bottom-center" : "bottom-left"}
                autoClose={6000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Grid>
    )
}

export default JobComp