import React, { useEffect, useState } from "react";
import './Groups.css';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import $ from "jquery";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import endpointData from '../../endpoint.json'
import TimerWithDate  from '../../Components/Timer/Timer';
// console.log(endpointData)
let endpoint = endpointData.host

// let endpoint = "http://localhost:8082/";
const Groups = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [time, setTime] = useState(TimerWithDate());
  const [groups, setGroups] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState("");
  const [org, setOrg] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [editData, setEditData] = useState([]);
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


  function getGroups() {
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };
    axios
      .get(endpoint + "orgGroup/getAllOrgGroups",config)
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      });
  }

  useEffect(() => {
    getGroups();
    getOrgData();
    const interval = setInterval(() => {
      setTime(TimerWithDate());
    }, 1000);
    return () => clearInterval(interval);

  }, []);

//  // data table with orgs data
var table = $("#groupData").DataTable({
  data: groups,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: id,
      defaultContent: "",
    },
    { data: "org_name" },
    { data: "name" },
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
            <a class="action-icon" id="editGroup" data-id="${data}" onClick="editGroup(${data})">
            <i class="mdi mdi-square-edit-outline"></i>
            </a>
            <a class="action-icon" id="deleteGroup" data-id="${data}" onClick="deleteGroup(${data})">
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
      className: "btn btn-success btn-sm d-none",
      exportOptions: {
        columns: [1, 2, 3, 4, 5, 6, 7],
      },
    },
    {
      extend: "copy",
      text: "Copy",
      className: "btn btn-success btn-sm d-none",
      exportOptions: {
        columns: [1, 2, 3, 4, 5, 6, 7],
      },
    },
    {
      extend: "csv",
      text: "Export to CSV",
      className: "btn btn-success btn-sm d-none",
      exportOptions: {
        columns: [1, 2, 3, 4, 5, 6, 7],
      },
    },
    {
      extend: "pdf",
      text: "Export to PDF",
      className: "btn btn-success btn-sm d-none",
      orientation: "landscape",
      exportOptions: {
        columns: [1, 2, 3, 4, 5, 6, 7],
      },
    },
  ],
});

// implement reload table
useEffect(() => {
  table.clear().draw();
  table.rows.add(groups);
  table.columns.adjust().draw();
}, [groups]);



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
    $("#groupData").DataTable().columns(0).visible(false);
  } else {
    $("#groupData").DataTable().columns(0).visible(true);
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


//add Groups
const addGroup = (e) => {
  e.preventDefault();
  const data = {
    org_id: org,
    name: name,
    description: description,
  };
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  axios
    .post(endpoint + "orgGroup/addOrgGroup", data, config)
    .then((res) => {
      if (res.status === 200) {
        notify("success", res.data.message);
        getGroups();
      } else {
        notify("error", res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      notify("error", err.response.data.message);
    });
// reset form
console.log(data)
  setOrg("");
  setName("");
  setDescription("");

handleClose();

};



// organization data for select option
const getOrgData = () => {
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  axios
    .get(endpoint + "organization/getAllOrg", config)
    .then((res) => {
      if (res.status === 200) {
        const orgData = res.data.filter((item) => item.isActive === true);
        setOrgData(orgData);
      } else {
        notify("error", res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
      notify("error", err.response.data.message);
    });
};


// edit group
  window.editGroup = function editGroup(id) {
    // open edit modal
    handleShowEdit();
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };
    axios
      .get(endpoint + "orgGroup/getOrgGroupById/" + id, config)
      .then((res) => {
        if (res.status === 200) {
          setEditData(res.data);
          setName(res.data.name);
          setOrg(res.data.org_id);
          setDescription(res.data.description);
          setIsActive(res.data.isActive);
        } else {
          notify("error", res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        notify("error", err.response.data.message);
      });
  };

  // update group
  const updateGroup = (e) => {
    e.preventDefault();
    const data = {
      org_id: org,
      name: name,
      description: description,
      isActive: isActive,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };
    axios
      .put(endpoint + "orgGroup/editOrgGroupById/" + editData.id, data, config)
      .then((res) => {
        if (res.status === 200) {
          notify("success", res.data.message);
          getGroups();
        } else {
          notify("error", res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        notify("error", err.response.data.message);
      });

      // reset form
      setName("");
      setOrg("");
      setDescription("");
      setIsActive(false);
      handleCloseEdit();
    }

  // delete group
  window.deleteGroup = function deleteGroup(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const config = {
          headers: { Authorization: `Bearer ${token}`,
          "Content-Type": "application/json" },
        };
        axios
          .delete(endpoint + "orgGroup/deleteOrgGroupById/" + id, config)
          .then((res) => {
            if (res.status === 200) {
              swal("Your records has been deleted!", {
                icon: "success",
              });
              getGroups();
            } else {
              notify("error", res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
            notify("error", err.response.data.message);
          });
      } else {
        swal("Your records is safe!");
      }
    });
  };

    

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
          <h2>Groups</h2>
        </div>

        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Groups</span>
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
              <i className="mdi mdi-plus-circle me-2"></i> Add Group
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
                    $("#groupData").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#groupData").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#groupData").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#groupData").DataTable().button(3).trigger();
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
            id="groupData"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>

                </th>
                <th>Organization</th>
                <th>Name</th>
                <th>Descripton</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {/* --------------------------------------modal------------------------------------------------- */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Groups</Modal.Title>
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
                <option>Select Organization</option>
                {orgData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Group Name"
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
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
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
          onClick={addGroup}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


     {/* --------------------------------------edit modal------------------------------------------------- */}

     <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Groups</Modal.Title>
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
                <option>Select Organization</option>
                {orgData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Group Name"
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
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
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
          onClick={updateGroup}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


  </main>
  )
}

export default Groups

