import React from 'react';

const StudentInfoTable = () => {
  return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Document Name</th>
                <th scope="col">1.1 Letter of Acceptance - Arrival</th>
            </tr>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Information</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Student Name</td>
                <td id="name">Felipe Andres Torres Asencio</td>
            </tr>
            <tr>
                <td>Student ID</td>
                <td id="student_id">20705</td>
            </tr>
            <tr>
                <td>School</td>
                <td id="school_name">ELI Dublin</td>
            </tr>
            <tr>
                <td>Campus</td>
                <td id="campus_name">Dublin Grand Canal</td>
            </tr>
            <tr>
                <td>Arrival Date</td>
                <td id="arrival_date">05/Oct/2025</td>
            </tr>
            <tr>
                <td>Departure Date</td>
                <td id="departure_date">04/Jun/2026</td>
            </tr>
            <tr>
                <td>Course Name</td>
                <td id="course_name">Academic Year RN - 15 hours Afternoon (4 day)</td>
            </tr>
            <tr>
                <td>Start Date Course</td>
                <td id="start_date_course">06/Oct/2025</td>
            </tr>

            <tr>
                <td>End Date Course</td>
                <td id="end_date_course">19/Mar/2026</td>
            </tr>
        </tbody>
    </table>
  );
};

export default StudentInfoTable;
