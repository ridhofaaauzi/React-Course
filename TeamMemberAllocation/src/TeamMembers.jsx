import React, { useContext } from "react";
import TeamMemberCard from "./TeamMemberCard";
import DataContext from "./context/DataContext";

const TeamMembers = () => {
  const { employees } = useContext(DataContext);
  return (
    <>
      {employees.map((employee) => (
        <TeamMemberCard employee={employee} key={employee.id} />
      ))}
    </>
  );
};

export default TeamMembers;
