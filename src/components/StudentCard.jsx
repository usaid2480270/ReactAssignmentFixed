import { useState } from 'react'

const StudentCard = (props) => {
    const [views, setViews] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    const handleView = () => {
        setViews(views + 1)
    }


    return (
        <div>
            <div className="card" style={{ width: "15rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXEwI08tI3URwykm_2D04K0O1ShG-d9tT_fijeAaPJA&s" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text mb-0">ID: {props.id}</p>
                    <p className="card-text mb-2">Views: {views}</p>

                    {showDetails && (
                        <div className="details">
                            <p className="mb-0">Major: {props.major}</p>
                            <p className="mb-0">Year: {props.year}</p>
                            <p>CGPA: {props.cgpa}</p>
                        </div>
                    )}

                    <button
                        className="btn btn-primary"
                        style={{ marginRight: "5px" }}
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {showDetails ? 'Hide Details' : 'Show Details'}
                    </button>

                    <button className="btn btn-secondary" onClick={handleView}>
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StudentCard