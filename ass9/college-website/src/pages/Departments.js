function Departments() {
    const dept = ["Computer Science", "IT", "Mechanical", "Civil", "Electronics"];
  
    return (
      <div>
        <h1>Departments</h1>
        <ul>
          {dept.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    );
  }
  export default Departments;