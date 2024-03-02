// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "SNO",
    selector: (row) => row.SNo,
  },
  {
    name: "Customer Name",
    selector: (row) => row.Customer_name,
  },
  {
    name: "Age",
    selector: (row) => row.Age,
  },
  {
    name: "Phone",
    selector: (row) => row.Phone,
  },
  {
    name: "Location",
    selector: (row) => row.Location,
  },
  {
    name: "Created_at Date",
    selector: (row) => row.Created_at_date,
    sortable: true,
  },
  {
    name: "Created_at Time",
    selector: (row) => row.Created_at_time,
    sortable: true,
  },
];

const data = [
  {
    SNo: 1,
    Customer_name: "Iqra Firdose",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "1:00 PM",
  },
  {
    SNo: 2,
    Customer_name: "Iqra",
    Age: 23,
    Phone: 1234567830,
    Location: "Mumbai",
    Created_at_date: "02/02/2024",
    Created_at_time: "11:00 PM",
  },
  {
    SNo: 3,
    Customer_name: "Shameem",
    Age: 20,
    Phone: 3234567890,
    Location: "Hyderabad",
    Created_at_date: "03/02/2024",
    Created_at_time: "12:00 PM",
  },
  {
    SNo: 4,
    Customer_name: "Nikitha",
    Age: 20,
    Phone: 2234567890,
    Location: "Banglore",
    Created_at_date: "04/02/2024",
    Created_at_time: "13:00 PM",
  },
  {
    SNo: 5,
    Customer_name: "Ayesha",
    Age: 30,
    Phone: 5234567890,
    Location: "Indore",
    Created_at_date: "06/02/2024",
    Created_at_time: "14:00 PM",
  },
  {
    SNo: 6,
    Customer_name: "Hifza",
    Age: 25,
    Phone: 9234567890,
    Location: "Jaipur",
    Created_at_date: "07/02/2024",
    Created_at_time: "1:00 PM",
  },
  {
    SNo: 7,
    Customer_name: "Aisha",
    Age: 28,
    Phone: 7234567890,
    Location: "Pune",
    Created_at_date: "08/02/2024",
    Created_at_time: "2:00 PM",
  },
  {
    SNo: 8,
    Customer_name: "Shaik",
    Age: 67,
    Phone: 4234567890,
    Location: "Bihar",
    Created_at_date: "10/02/2024",
    Created_at_time: "3:00 AM",
  },
  {
    SNo: 9,
    Customer_name: "Sariya",
    Age: 29,
    Phone: 8234567890,
    Location: "Banglore",
    Created_at_date: "12/02/2024",
    Created_at_time: "4:00 PM",
  },
  {
    SNo: 10,
    Customer_name: "Rifaah",
    Age: 20,
    Phone: 7234567890,
    Location: "Mumbai",
    Created_at_date: "14/02/2024",
    Created_at_time: "1:00 PM",
  },
  {
    SNo: 11,
    Customer_name: "Ushra",
    Age: 29,
    Phone: 6234567890,
    Location: "Lucknow",
    Created_at_date: "12/02/2024",
    Created_at_time: "7:00 AM",
  },
  {
    SNo: 12,
    Customer_name: "Amaar",
    Age: 8,
    Phone: 9234567890,
    Location: "Mumbai",
    Created_at_date: "08/02/2024",
    Created_at_time: "9:00 AM",
  },
  {
    SNo: 13,
    Customer_name: "Apsha",
    Age: 35,
    Phone: 8234567890,
    Location: "Mumbai",
    Created_at_date: "22/02/2024",
    Created_at_time: "7:00 PM",
  },
  {
    SNo: 14,
    Customer_name: "Saad",
    Age: 27,
    Phone: 1234567890,
    Location: "Andhra Pradesh",
    Created_at_date: "07/02/2024",
    Created_at_time: "1:00 PM",
  },
  {
    SNo: 15,
    Customer_name: "Adnan",
    Age: 19,
    Phone: 1234567890,
    Location: "Andhra Pradesh",
    Created_at_date: "22/02/2024",
    Created_at_time: "6:00 PM",
  },
  {
    SNo: 16,
    Customer_name: "Sufiyan",
    Age: 25,
    Phone: 1234567890,
    Location: "Rajasthan",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 17,
    Customer_name: "Farhan",
    Age: 20,
    Phone: 1234567890,
    Location: "Andhra Pradesh",
    Created_at_date: "12/02/2024",
    Created_at_time: "5:00 PM",
  },
  {
    SNo: 18,
    Customer_name: "Fareed",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "21/02/2024",
    Created_at_time: "12:00 PM",
  },
  {
    SNo: 19,
    Customer_name: "Iqra Firdose",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 20,
    Customer_name: "Humera",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 21,
    Customer_name: "Misba",
    Age: 20,
    Phone: 1234567890,
    Location: "Chennai",
    Created_at_date: "02/02/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 22,
    Customer_name: "Heena",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 23,
    Customer_name: "Laiba",
    Age: 20,
    Phone: 1234567890,
    Location: "Tamilnadu",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 24,
    Customer_name: "Ahhad",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 25,
    Customer_name: "Zakwaan",
    Age: 20,
    Phone: 1234567890,
    Location: "Mumbai",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 26,
    Customer_name: "Rohan",
    Age: 20,
    Phone: 1234567890,
    Location: "Indore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 27,
    Customer_name: "Iqra Anjum",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 28,
    Customer_name: "Ushra Firdose",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 29,
    Customer_name: "Heena Firdose",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 30,
    Customer_name: "Misba Firdose",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
  {
    SNo: 31,
    Customer_name: "Humera Firdose",
    Age: 20,
    Phone: 1234567890,
    Location: "Banglore",
    Created_at_date: "02/03/2024",
    Created_at_time: "15:00 PM",
  },
];

function App() {
  const [globalFilterText, setGlobalFilterText] = useState("");

  const handleGlobalFilter = (e) => {
    const value = e.target.value || "";
    setGlobalFilterText(value);
  };

  const filteredData = data.filter((row) => {
    return (
      row.Customer_name.toLowerCase().includes(
        globalFilterText.toLowerCase()
      ) || row.Location.toLowerCase().includes(globalFilterText.toLowerCase())
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search by Customer_name or location"
        onChange={handleGlobalFilter}
        value={globalFilterText}
        style={{ width: "300px", marginRight: "10px" }}
      />
      <DataTable columns={columns} data={filteredData} pagination />
    </>
  );
}

export default App;

// function App() {

//   const App = () => {
//     const [globalFilterText, setGlobalFilterText] = useState('');

//     const handleGlobalFilter = (e) => {
//       const value = e.target.value || '';
//       setGlobalFilterText(value);
//     };

//     const filteredData = data.filter((row) => {
//       return Object.values(row).some(value) =>
//       value.toString().toLowerCase().includes(globalFilterText.toLowerCase())
//       );
//     });
//   }

//   return(
//   <>
//     <input
//       type="text"
//       placeholder="Serach by name"
//       onChange={handleGlobalFilter}
//       value={globalFilterText}
//     />
//     <DataTable columns={columns} data={data} pagination />;
//   )

// }

// export default App;
