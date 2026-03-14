import React from "react";
import Container from "../../components/Ui/Container";
import Header from "../../components/new-course/Header";
import AddLiveSessionBtn from "../../components/LiveSession/AddLiveSessionBtn";
import { useNavigate } from "react-router-dom";
import UpcomingLiveSessions from "../../components/LiveSession/UpcomingLiveSessions";

export default function LiveSessionsInstructer() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Header
            title="Session Management"
            subTitle="Create, manage and schedule your live classroom sessions.."
          />
          <div className="sm:self-auto self-start">
            <AddLiveSessionBtn
              onClick={() => navigate("/instructer/liveSessions/new")}
            />
          </div>
        </div>
        <UpcomingLiveSessions />
      </Container>
    </div>
  );
}
