import React,{useEffect, useState, useRef} from 'react'
import './Students.css'
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
import '../../Components/Timer/Timer2';

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host

const Students = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [id, setId] = useState("");
  const [StudentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [user_group, setUser_group] = useState("");
  const [rfid_card, setRfid_card] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const[org, setOrg] = useState("");
  const [orgData, setOrgData] = useState([]);
  const[groupData, setGroupData] = useState([]);
  const[cardData, setCardData] = useState([]);
  const token = localStorage.getItem("token");


  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showView, setShowView] = useState(false);
  const handleCloseView = () => setShowView(false);
  const handleShowView = () => setShowView(true);

  const handelSwitch = () => {
    setIsActive(!isActive);
  };

  function getStudents(){
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.get(endpoint + 'students/getAllStudents', config)
    .then((res) => {
      console.log(res.data);
      setStudentsData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  useEffect(() => {
    getStudents();
    getOrgData();
    getUserGroupData();
    getRfidCardData();
  }, []);



    // datable implementation
var table = $("#student").DataTable({
  data: studentsData,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: id,
      defaultContent: "",
    },
    { data: "org_name" },
    { data: "student_id" },
    { data: "name" },
    { data: "email" },
    { data: "phone" },
    { data: "address" },
    { data: "rfid_card_name" },
    { data: "user_group_name" },
    {
      data: "isActive",
      render: function (data, type, row) {
        if (data === true) {
          return `<span class="badge wn-success">Active</span>`;
        } else {
          return `<span class="badge bg-danger">Inactive</span>`;
        }
      },
    },
    {
      data: "id",
      render: function (data, type, row) {
        return `<div class="action-buttons">
        <a class="action-icon" id="editStudent" data-id="${data}" onClick="editStudent(${data})">
        <i class="mdi mdi-square-edit-outline"></i>
        </a>
        <a class="action-icon" id="deleteStudent" data-id="${data}" onClick="deleteStudent(${data})">
        <i class="mdi mdi-delete"></i>
        </a>
        <a class="action-icon" id="issueRfid" data-id="${data}" onClick="issueRfid(${data})">
        <i class="mdi mdi-qrcode-scan" aria-hidden="true"></i>
        </a>
        </div>
        `
  },
},
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
    title: "Student",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4,5,6,7,8,9],
    },
  },
  {
    extend: "copy",
    text: "Copy",
    title: "Student",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4,5,6,7,8,9],
    },
  },
  {
    extend: "csv",
    text: "Export to CSV",
    title: "Student",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4,5,6,7,8,9],
    },
  },
  {
    extend: "pdf",
    text: "Export to PDF",
    title: "Student",
    className: "btn btn-success btn-sm d-none",
    orientation: "landscape",
    exportOptions: {
      columns: [1,2,3,4,5,6,7,8,9],
    },
  },
],
});


// implement reload table
useEffect(() => {
  table.clear().draw();
  table.rows.add(studentsData);
  table.columns.adjust().draw();
}, [studentsData]);


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


  //Get Screan Size and use for + - icon
  function getScreanSize() {
    if (window.innerWidth >= 768) {
      $("#student").DataTable().columns(0).visible(false);
    } else {
      $("#student").DataTable().columns(0).visible(true);
    }
  }
  
  getScreanSize();
  // resize window
  $(window).resize(function () {
    if ($(window).width() >= 768) {
      table.column(0).visible(false);
    } else {
      table.column(0).visible(true);
    }
  });
    

// get org data
function getOrgData(){
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }
  axios.get(endpoint + "organization/getAllOrg", config).then((res) => {
    console.log(res.data)
    setOrgData(res.data)
  }).catch((err) => {
    notify("error", err.response.data.message);
  })
}



  // add student
  const addStudent = (e) => {
    e.preventDefault();
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
  }
  const data = {
    org_id: org,
    student_id: StudentId,
    name: name,
    email: email,
    phone: phone,
    address: address,
  };
  axios.post(endpoint + "students/addStudent", data, config).then((res) => {
    console.log(res.data)
    notify("success", res.data.message);
    getStudents();
  }).catch((err) => {
    notify("error", err.response.data.message);
  })
  // clear form
  setOrg("")
  setStudentId("")
  setName("")
  setEmail("")
  setPhone("")
  setAddress("")
  handleClose();
  };

// get user group data
function getUserGroupData(){
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  axios.get(endpoint + "userGroup/getAllUserGroups", config).then((res) => {
    console.log(res.data)
    setGroupData(res.data)
  }).catch((err) => {
    notify("error", err.response.data.message);
  })
}

// get all rfid card data
function getRfidCardData(){
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  axios.get(endpoint + "rfid/getAllRfidCards", config).then((res) => {
    console.log(res.data)
    setCardData(res.data)
  }).catch((err) => {
    notify("error", err.response.data.message);
  })
}


// edit student
window.editStudent = function editStudent(id) {
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
}
console.log(id)
handleShowEdit();
axios.get(endpoint + "students/getStudentById/" + id, config).then((res) => {
  console.log(res.data, "hello")
  setId(res.data.id)
  setOrg(res.data.org_id)
  setStudentId(res.data.student_id)
  setName(res.data.name)
  setEmail(res.data.email)
  setPhone(res.data.phone)
  setAddress(res.data.address)
  setUser_group(res.data.user_group_id)
  setRfid_card(res.data.rfid_card_id)
  setIsActive(res.data.isActive)

}).catch((err) => {
  console.log(err)
  notify("error", err.response.data.message);
})
}

// update student
const updateStudent = (e) => {
  e.preventDefault();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
}

const data = {
  org_id: org,
  student_id: StudentId,
  name: name,
  email: email,
  phone: phone,
  address: address,
  user_group_id: user_group,
  rfid_card_id: rfid_card,
  isActive: isActive,
};
console.log(id)
axios.put(endpoint + "students/editStudentById/" + id, data, config).then((res) => {
  console.log(res.data)
  notify("success", res.data.message);
  getStudents();
}).catch((err) => {
  console.log(err)
  notify("error", err.response.data);
})
// clear form
setOrg("")
setStudentId("")
setName("")
setEmail("")
setPhone("")
setAddress("")
setUser_group("")
setRfid_card("")
setIsActive("")
handleCloseEdit();

}

// delete student
window.deleteStudent = function deleteStudent(id) {
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
}
console.log(id)
swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this user!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
}).then((willDelete) => {
  if (willDelete) {
    axios.delete(endpoint + "students/deleteStudentById/" + id, config).then((res) => {
      console.log(res.data)
      if (res.status === 200) {
        swal("Your records has been deleted!", {
          icon: "success",
        });
        getStudents();
      } else {
        notify("error", res.data.message);
      }
    }).catch((err) => {
      console.log(err)
      notify("error", err.response.data);
    })
  } else {
    swal("Your user is safe!",{
      icon: "success",
    });
  }
});
}

// issue RFID card
window.issueRfid = function issueRfid(id) {
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
}
console.log(id)
setId(id)
handleShowView();
axios.post(endpoint + "students/issueCard/" + id).then((res) => {
  console.log(res.data)
  notify("success", res.data.message);
  getStudents();
  handleCloseView();
}).catch((err) => {
  console.log(err)
  notify("error", err.response.data);
})

}

const updateCard = (e) => {
  e.preventDefault();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
}
}



  //Notification Tost
const notify = (action, msg) => {
  toast[action](msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      fontSize: "16px",
      top: "50px",
    },
  });
};

  return (
    <main id="main-body" className={sidebar === "true" ? window.innerWidth < 768 ?  "main-body-toggle":"": "main-body-toggle" } >
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* mobile time */}
      <div className="timer" id="mobile-timer">
          <div className="time-icon">
            <img src="./assets/images/clock.png" alt="clock-icon" />
          </div>
          <div className="main-time" id="hm_ampm">
            {" "}
          </div>
          <div className="main-date">
            <h5 id="day_dom">
              </h5>
            <h6 id="date_dom">
            </h6>
          </div>
        </div>


    <div className="body-title">
        <div className="b-title-left">
          <h2>Student</h2>
          <div id="main"></div>
        </div>


        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Student</span>
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
              onClick={handleShow}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="mdi mdi-plus-circle me-2"></i> Add Student
            </a>
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
                    $("#student").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#student").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#student").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#student").DataTable().button(3).trigger();
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
            id="student"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                </th>
                <th>Organization</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Email ID</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>RFID Card</th>
                <th>User Group</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

       {/* --------------------------------------modal------------------------------------------------- */}

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Organization</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={org}
                onChange={(e) => {
                  console.log(e.target.value);
                  setOrg(e.target.value);
                }}
              >
                <option value={" "}>Select Organization</option>
                {orgData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Student Id</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Student ID"
                autoFocus
                value={StudentId}
                onChange={(e) => {
                  console.log(e.target.value);
                  setStudentId(e.target.value); 
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Student Name"
                autoFocus
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Email Id"
                autoFocus
                value={email}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Phone No"
                autoFocus
                value={phone}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Address"
                autoFocus
                value={address}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={addStudent}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* --------------------------------------Edit modal------------------------------------------------- */}

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Organization</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={org}
                onChange={(e) => {
                  console.log(e.target.value);
                  setOrg(e.target.value);
                }}
              >
                <option value={" "}>Select Organization</option>
                {orgData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Group</Form.Label>
              {/* //Dropdown for group */}
              <Form.Select
                aria-label="Default select example"
                value={user_group}
                onChange={(e) => {
                  console.log(e.target.value);
                  setUser_group(e.target.value);
                }}
              >
                <option value={" "}>Select User Group</option>
                {groupData.map((item) => (
                  <option value={item.id}>{item.group_name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>RFID Card No</Form.Label>
              {/* //Dropdown for group */}
              <Form.Select
                aria-label="Default select example"
                value={rfid_card}
                onChange={(e) => {
                  console.log(e.target.value);
                  setRfid_card(e.target.value);
                }}
              >
                <option value={" "}>Select RFID card</option>
                {cardData.map((item) => (
                  <option value={item.id}>{item.card_no}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Student Id</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Student ID"
                autoFocus
                value={StudentId}
                onChange={(e) => {
                  console.log(e.target.value);
                  setStudentId(e.target.value); 
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Student Name"
                autoFocus
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Email Id"
                autoFocus
                value={email}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Phone No"
                autoFocus
                value={phone}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Address"
                autoFocus
                value={address}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>

            {/* check box */}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Status</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Active/Inactive"
                checked={isActive}
                onChange={handelSwitch}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={updateStudent}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


{/* --------------------------------------card modal------------------------------------------------- */}

<Modal show={showView} onHide={handleCloseView}>
        <Modal.Header closeButton>
          <Modal.Title>Scan RFID & Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <img src="https://i.pinimg.com/originals/c0/c9/c2/c0c9c2a6b0a99053b87b14114c876000.gif" alt="" srcset="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={updateCard}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


  </main>
  )
}

export default Students