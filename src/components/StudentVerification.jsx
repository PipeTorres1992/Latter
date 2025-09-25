import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './studentVerification/Header';
import VerificationBanner from './studentVerification/VerificationBanner';
import StudentInfoTable from './studentVerification/StudentInfoTable';
import Footer from './studentVerification/Footer';

const StudentVerification = () => {
  const { studentId } = useParams();

  return (
    <>
      <Header />
      <main>
        <div className="container mt-5">
          <div className="card">
            <div className="card-body">
              <p>Student ID from URL: <strong>{studentId}</strong></p> {/* This line is for testing */}
              <VerificationBanner />
              <p className="mb-4">
                The following student information has been verified and authenticated by <b>ELI Schools</b>. The
                provided data is accurate and valid. <br />
              </p>
              <StudentInfoTable />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentVerification;