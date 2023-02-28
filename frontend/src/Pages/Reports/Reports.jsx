import React, { useEffect, useState } from "react";
import "./Reports.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import $ from "jquery";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "jszip";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimerWithDate  from '../../Components/Timer/Timer';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import endpointData from "../../endpoint.json";
// console.log(endpointData)
let endpoint = endpointData.host;

const Reports = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [time, setTime] = useState(TimerWithDate());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [logData, setLogData] = useState([]);
  const [report_type, setReport_type] = useState("");
  const [org, setOrg] = useState("");
  const [organizationData, setOrganizationData] = useState([]);
  const [report, setReport] = useState([]);
  const [dataforChart, setDataforChart] = useState([]);
  const [highestTotalHours, setHighestTotalHours] = useState(0);
  const token = localStorage.getItem("token");
  // reportTypeList
  
  const reportTypeList = [
    { id: 1, name: "Date Wise" },
    { id: 2, name: "Punch Wise" },
  ];

  //getallLogs data
  function getAlllogs() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .get(endpoint + "log/getAllLogs", config)
      .then((res) => {
        setLogData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // get all organization
  function getAllOrganization() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    axios
      .get(endpoint + "organization/getAllOrg", config)
      .then((response) => {
        console.log(response.data);
        setOrganizationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAlllogs();
    getAllOrganization();
    const interval = setInterval(() => {
      setTime(TimerWithDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);



  // report caculation from backend
  function reportCalculation() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      org_id: org,
      report_type: report_type,
      startDate: startDate.toLocaleDateString(),
      endDate: endDate.toLocaleDateString(),
    };
    axios
      .post(endpoint + "log/reportCalculation", data, config)
      .then((response) => {
        console.log(response.data, );
        let data = response.data;

        transformData(data);
        transformDataforChart(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // trasform data for table
  function transformData(data) {
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
      const currData = data[i].data;
      for (let j = 0; j < currData.length; j++) {
        const newData = {
          date: data[i].date,
          student_id: currData[j].student_id,
          name: currData[j].name,
          organization: currData[j].organization,
          total_hours: currData[j].total_hours,
          intime: currData[j].intime,
          outtime: currData[j].outtime,
        };
        newArr.push(newData);
      }
    }
    setReport(newArr);
    return newArr;
  }

  // trasform data for chart
  function transformDataforChart(data) {
    let outputData = [];
    let highestTotalHours = 0; // Initialize the variable to zero
    for (let i = 0; i < data.length; i++) {
      const currData = data[i].data;
      let totalHours = 0;
      for (let j = 0; j < currData.length; j++) {
        totalHours += parseFloat(currData[j].total_hours);
      }
      const newData = {
        date: data[i].date,
        total_hours: totalHours.toFixed(2),
      };
      outputData.push(newData);
      if (totalHours > highestTotalHours) {
        highestTotalHours = totalHours + ((totalHours * 10) / 100);
      }
    }
    setHighestTotalHours(highestTotalHours.toFixed(2));
    setDataforChart(outputData);
    return outputData;
  }

  // datable implementation
  var table = $("#report").DataTable({
    data: report,
    columns: [
      {
        className: "dt-control",
        orderable: false,
        // data: student_id,
        defaultContent: "",
      },
      { data: "date" },
      { data: "student_id" },
      { data: "name" },
      { data: "organization" },
      { data: "intime" },
      { data: "outtime" },
      { data: "total_hours" },
    ],
    select: {
      style: "os",
      selector: "td:first-child",
    },
    responsive: true,
    retrieve: true,
    dom: "lBfrtip",
    buttons: [
      {
        extend: "print",
        text: "Print",
        title: "Report",
        className: "btn btn-success btn-sm d-none",
        exportOptions: {
          columns: [1, 2, 3, 4, 5],
        },
      },
      {
        extend: "copy",
        text: "Copy",
        title: "Report",
        className: "btn btn-success btn-sm d-none",
        exportOptions: {
          columns: [1, 2, 3, 4, 5],
        },
      },
      {
        extend: "csv",
        text: "Export to CSV",
        title: "Report",
        className: "btn btn-success btn-sm d-none",
        exportOptions: {
          columns: [1, 2, 3, 4, 5],
        },
      },
      {
        extend: "pdf",
        text: "Export to PDF",
        title: "Report",
        className: "btn btn-success btn-sm d-none",
        orientation: "landscape",
        exportOptions: {
          columns: [1, 2, 3, 4, 5],
        },
      },
    ],
  });

  //   // implement reload table
  useEffect(() => {
    table.clear().draw();
    table.rows.add(report);
    table.columns.adjust().draw();
  }, [report]);

  //  custome toggle for three dots
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <p
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {/* custom icon */}
      {children}
    </p>
  ));

  return (
    <main
      id="main-body"
      className={
        sidebar === "true"
          ? window.innerWidth < 768
            ? "main-body-toggle"
            : ""
          : "main-body-toggle"
      }
    >

{/* mobile time */}
<div className="timer" id="mobile-timer">
          <div className="time-icon">
            <img src="./assets/images/clock.png" alt="clock-icon" />
          </div>
          <div className="main-time">
            {" "}
            {time.hours}:{time.minutes} <span>{time.ampm}</span>
          </div>
          <div className="main-date">
            <h5>{time.day}</h5>
            <h6>
              {time.date} {time.month} {time.year}
            </h6>
          </div>
        </div>


      <div className="body-title">
        <div className="b-title-left">
          <h2>Reports</h2>
          <div id="main"></div>
        </div>

        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <div className="title-left">
            <a
              href="#"
              className="btn btn-success"
              onClick={reportCalculation}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="mdi mdi-plus-circle me-2"></i> Generate Report
            </a>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Organization</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={org}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setOrg(e.target.value);
                  }}
                >
                  <option value={" "}>Select Organization</option>
                  {organizationData.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            {/* <div className="col-md-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Report</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={report_type}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setReport_type(e.target.value);
                  }}
                >
                  <option value={" "}>Select Report</option>
                  {reportTypeList.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div> */}

            <div className="col-md-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>From</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    console.log(date.toLocaleDateString());
                    setStartDate(date);
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>To</Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    console.log(date.toLocaleDateString());
                    setEndDate(date);
                  }}
                />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------Table--------------------------------------------- */}
      <div className="card">
        <div className="card-title">
          <div className="title-left">
            <h4>Report Table</h4>
          </div>

          <div className="title-right">
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle}>
                <i class="icon-options-vertical"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  id="print_id"
                  onClick={() => {
                    $("#report").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#report").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#report").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#report").DataTable().button(3).trigger();
                  }}
                >
                  PDF
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="card-body">
          <table
            id="report"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th></th>
                <th>Date</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Organization</th>
                <th>In Time</th>
                <th>Out Time</th>
                <th>Total Hours</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {/* ---------------------------------------------Chart--------------------------------------------- */}
{console.log(typeof highestTotalHours)}
      <div className="card">
        <div className="card-title">
          <div className="title-left">
            <h4>Statisics</h4>
          </div>
          <div className="title-right">
            {/* <Dropdown>
              <Dropdown.Toggle as={CustomToggle}>
                <i class="icon-options-vertical"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  id="print_id"
                  onClick={() => {
                    $("#permission").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#permission").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#permission").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#permission").DataTable().button(3).trigger();
                  }}
                >
                  PDF
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
        </div>

        <div className="card-body">
          <div className="card-body">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={dataforChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            {/* // use highestTotalHours as the max value of the y axis */}
            <YAxis domain={[0, parseInt(highestTotalHours)]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="total_hours" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reports;
