import React from "react";

const students = [
  {
    id: 1,
    name: "Eve",
  },
  {
    id: 2,
    name: "Albelda",
  },
  {
    id: 3,
    name: "Rose",
  },
  {
    id: 4,
    name: "white",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
