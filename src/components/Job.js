import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";
import JobInfoContainer from "./JobInfoComponent";
import moment from "moment";
import { deleteJob } from "../features/job/jobSlice";

const Job = ({ _id:id, position, company, jobLocation, jobType, createdAt, status }) => {
    const dispatch = useDispatch()
    const date = moment(createdAt).format('MMM do, YYYY')

    return <Wrapper>
        <header>
            <div className="main-icon">
                {company.charAt(0)}
            </div>
            <div className="info">
                <h5>{position}</h5>
                <p>{company}</p>
            </div>
        </header>
        <div className="content">
            <div className="content-center">
                <JobInfoContainer icon={<FaLocationArrow />} text={jobLocation} />
                <JobInfoContainer icon={<FaCalendarAlt />} text={ date} />
                <JobInfoContainer icon={<FaBriefcase />} text={ jobType} />

                <div className={`status ${status}`}>
                    {status}
                </div>
            </div>
            <footer>
                <div className="actions">
                    <Link to='/add-job' className="btn edit-btn" onClick={console.log(123321)}>Edit</Link>
                    <button className="btn delete-btn" onClick={()=>dispatch(deleteJob(id))}> delete</button>
                </div>
            </footer>
        </div>
    </Wrapper>
}

export default Job