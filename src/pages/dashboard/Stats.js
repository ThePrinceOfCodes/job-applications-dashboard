import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showStats } from "../../features/allJobs/allJobsSlice"
import { StatsContainer, Loading, ChartsContainer } from '../../components'


const Stats = () => {
    const {isLoading, monthlyApplications} = useSelector((store)=> store.allJobs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showStats)
    }, [])
    
    return <h1>
        stats
    </h1>
}

export default Stats