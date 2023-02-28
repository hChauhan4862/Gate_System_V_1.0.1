import React,{useEffect, useState} from 'react'
import './Doors.css'
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
import TimerWithDate  from '../../Components/Timer/Timer';

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host



const Doors = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [time, setTime] = useState(TimerWithDate());
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [description, setDescription] = useState("");
  const [doorNo, setDoorNo] = useState("");
  const [isActive, setIsActive] = useState("");
  const [doorsData, setDoorsData] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const token = localStorage.getItem("token");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handelSwitch = () => {
    setIsActive(!isActive);
  };

  // get all doors
  function getDoors(){
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
    }
    axios.get(endpoint + "doors/getAllDoors", config)
    .then((res) => {
      console.log(res.data)
      setDoorsData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })  
  }

  useEffect(() => {
    getDoors()
    getOrgData()
    const interval = setInterval(() => {
      setTime(TimerWithDate());
    }, 1000);
    return () => clearInterval(interval);
  }, [])

    // datable implementation
    var table = $("#doors").DataTable({
      data: doorsData,
      columns: [
        {
          className: "dt-control",
          orderable: false,
          data: id,
          defaultContent: "",
        },
        { data: "org_name" },
        { data: "name" },
        { data: "door_no" },
        { data: "description" },
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
            <a class="action-icon" id="editDoor" data-id="${data}" onClick="editDoor(${data})">
            <i class="mdi mdi-square-edit-outline"></i>
            </a>
            <a class="action-icon" id="deleteDoor" data-id="${data}" onClick="deleteDoor(${data})">
            <i class="mdi mdi-delete"></i>
            </a>
            </div>
            `
      },
    }
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
    title: "Doors",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4,5],
    },
  },
  {
    extend: "copy",
    text: "Copy",
    title: "Doors",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4,5],
    },
  },
  {
    extend: "csv",
    text: "Export to CSV",
    title: "Doors",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4,5],
    },
  },
  {
    extend: "pdf",
    text: "Export to PDF",
    title: "Doors",
    className: "btn btn-success btn-sm d-none",
    orientation: "landscape",
    exportOptions: {
      columns: [1,2,3,4,5],
    },
  },
],
});


// implement reload table
useEffect(() => {
  table.clear().draw();
  table.rows.add(doorsData);
  table.columns.adjust().draw();
}, [doorsData]);


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
    $("#doors").DataTable().columns(0).visible(false);
  } else {
    $("#doors").DataTable().columns(0).visible(true);
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


// add door
const addDoor = (e)=> {
  e.preventDefault()
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  const data = {
    org_id: org,
    name: name,
    door_no: doorNo,
    description: description,
  }
  axios.post(endpoint + "doors/addDoor", data, config)
  .then((res) => {
    console.log(res.data)
    if(res.status === 201){
      notify("success", res.data.message)
      getDoors()
    }else{
      notify("error", res.data.message)
    }
  })
  .catch((err) => {
    console.log(err)
    notify("error", err.response.data)
  })

// clear form
  setOrg("")
  setName("")
  setDoorNo("")
  setDescription("")
  handleClose()
}


// edit door
window.editDoor = function editDoor(id){
  handleShowEdit()
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }

  axios.get(endpoint + "doors/getDoorById/" + id, config)
  .then((res) => {
if(res.status === 200){
  console.log(res.data)
  setId(res.data.id)
  setOrg(res.data.org_id)
  setName(res.data.name)
  setDoorNo(res.data.door_no)
  setDescription(res.data.description)
  setIsActive(res.data.isActive)
}else{
  notify("error", res.data.message)
}
})
  .catch((err) => {
    console.log(err)
    notify("error", err.response.data)
  })
    
}


// update door
const updateDoor = (e)=> {
  e.preventDefault()
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  const data = {
    org_id: org,
    name: name,
    door_no: doorNo,
    description: description,
    isActive: isActive,
}
  axios.put(endpoint + "doors/editDoorById/" + id, data, config)
  .then((res) => {
    console.log(res.data)
    if(res.status === 200){
      notify("success", res.data.message)
      getDoors()
    }else{
      notify("error", res.data.message)
    }
  })
  .catch((err) => {
    console.log(err)
    notify("error", err.response.data)
  })

// clear form
  setOrg("")
  setName("")
  setDoorNo("")
  setDescription("")
  setIsActive("")
  handleCloseEdit()
}

// delete door
window.deleteDoor = function deleteDoor(id){
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this user!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios.delete(endpoint + "doors/deleteDoorById/" + id, config)
      .then((res) => {
        console.log(res.data)
        if(res.status === 200){
          swal("Your records has been deleted!", {
            icon: "success",
          });
          getDoors()
        }else{
          notify("error", res.data.message)
        }
      })
      .catch((err) => {
        console.log(err)
        notify("error", err.response.data)
      })
    } else {
      swal("Your Record is safe!", {
        icon: "success",
      });
    }
  });
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
      {/* time */}
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
          <h2>Doors</h2>
          <div id="main"></div>
        </div>


        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Doors</span>
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
              <i className="mdi mdi-plus-circle me-2"></i> Add Door
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
                    $("#doors").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#doors").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#doors").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#doors").DataTable().button(3).trigger();
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
            id="doors"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                </th>
                <th>Organization</th>
                <th>Door</th>
                <th>Door No</th>
                <th>Description</th>
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
          <Modal.Title>Add Door</Modal.Title>
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
              <Form.Label>Door</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
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
              <Form.Label>Door No</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={doorNo}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDoorNo(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={description}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={addDoor}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


       {/* -------------------------------------- Edit modal------------------------------------------------- */}

       <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Door</Modal.Title>
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
              <Form.Label>Door</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
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
              <Form.Label>Door No</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={doorNo}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDoorNo(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={description}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDescription(e.target.value);
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
          onClick={updateDoor}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

  </main>
  )
}

export default Doors