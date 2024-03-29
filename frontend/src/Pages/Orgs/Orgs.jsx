import React, { useEffect, useState} from "react";
import "./Orgs.css";
import "jszip";
import $ from "jquery";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import OrgData from "../../Data/org.json";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import '../../Components/Timer/Timer2';

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host
// let endpoint = "http://localhost:8082/";

const Orgs = () => {
  const sidebar = localStorage.getItem("sidebar");

  const [orgs, setOrgs] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [contact_person, setContact_person] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const token = localStorage.getItem("token");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showEdit, setShowEdit] = useState(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  const [editData, setEditData] = useState(false);



  //handelSwitch
  const handleSwitch = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
 

  
  // get all orgs from apis
  function getOrgs() {
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };
    axios
      .get(endpoint + "organization/getAllOrg", config)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setOrgs(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    console.log(orgs, "orgs");
  }

  useEffect(() => {
    getOrgs();
  }, []);




    // datable implementation
    var table = $("#orgData").DataTable({
      data: orgs,
      columns: [
        {
          className: "dt-control",
          orderable: false,
          data: id,
          defaultContent: "",
        },
        { data: "name" },
        { data: "address" },
        { data: "contact_no" },
        { data: "contact_person" },
        { data: "email" },
        { data: "description" },
        {
          // if isActive is true then show active else show inactive
          render: function (data, type, row) {
            if (data === true) {
              return `<span class="badge wn-success">Active</span>`;
            } else {
              return `<span class="badge bg-danger">Inactive</span>`;
            }
          },
          data: "isActive",
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
  table.rows.add(orgs);
  table.columns.adjust().draw();
}, [orgs]);


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
      $("#orgData").DataTable().columns(0).visible(false);
    } else {
      $("#orgData").DataTable().columns(0).visible(true);
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

  // addOrganization
  const addOrganization = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      address: address,
      contact_no: contact_no,
      contact_person: contact_person,
      description: description,
      email: email,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };
    axios
      .post(endpoint + "organization/addOrg", data, config)
      .then((res) => {
        if (res.status === 200) {
          notify("success", res.data.message);
          getOrgs();
        } else {
          notify("error", res.data.message);
        }
      })
      .catch((error) => {
        notify("error", error.response.data);
        // console.log(error.response.data);
      });

    // reset form
    setName("");
    setAddress("");
    setContact_no("");
    setContact_person("");
    setDescription("");
    setEmail("");
    handleClose();
  };

// edit organization
window.editStudent = (id) => {
  console.log(id);
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };
    handleShowEdit();
    axios
      .get(endpoint + "organization/getOrg/" + id,config)
      .then((res) => {
        if (res.status === 200) {
          setEditData(res.data);
          setId(res.data.id);
          setName(res.data.name);
          setAddress(res.data.address);
          setContact_no(res.data.contact_no);
          setContact_person(res.data.contact_person);
          setDescription(res.data.description);
          setEmail(res.data.email);
          setIsActive(res.data.isActive);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


   // updateOrganization
   const updateOrganization = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      address: address,
      contact_no: contact_no,
      contact_person: contact_person,
      description: description,
      email: email,
      isActive: isActive,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };

    axios
      .put(endpoint + "organization/editOrg/" + id, data, config)
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data)
          notify("success", res.data.message);
          getOrgs();
        } else {
          notify("error", res.data.message);
        }
      })
      .catch((error) => {
        notify("error", error.response.data);
        // console.log(error.response.data);
      });
    // reset form
    setName("");
    setAddress("");
    setContact_no("");
    setContact_person("");
    setDescription("");
    setEmail("");
    setIsActive("");
    handleCloseEdit();
  };

// delete organization
window.deleteStudent = (id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  console.log(id);
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this user!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios
          .delete(endpoint + "organization/deleteOrg/" + id, config)
          .then((res) => {
            if (res.status === 200) {
              swal("Your records has been deleted!", {
                icon: "success",
              });
            }
            getOrgs();
          })
          .catch((err) => {
            console.log(err);
            notify("error", err.response.data.message);
          });

      } else {
        swal("Your record is safe!");
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

      <div className="body-title">
        <div className="b-title-left">
          <h2>Organization</h2>
        </div>

        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Organization</span>
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
              <i className="mdi mdi-plus-circle me-2"></i> Add Organization
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
                    $("#orgData").DataTable().button(0).trigger();
                  }}
                >
                  <i className="mdi mdi-printer"></i> Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#orgData").DataTable().button(1).trigger();
                  }}
                >
                  <i className="mdi mdi-content-copy"></i> Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#orgData").DataTable().button(2).trigger();
                  }}
                >
                  <i className="mdi mdi-microsoft-excel"></i> CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#orgData").DataTable().button(3).trigger();
                  }}
                >
                 <i className="mdi mdi-file-pdf-outline"></i> PDF
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="card-body">
          <table
            id="orgData"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Person</th>
                <th>Email</th>
                <th>Description</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {/* modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Your Name"
                autoFocus
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter Address"
                autoFocus
                value={address}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="contact-person"
                placeholder="Enter Contact Number"
                autoFocus
                value={contact_no}
                onChange={(e) => {
                  console.log(e.target.value);
                  setContact_no(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Contact Person</Form.Label>
              <Form.Control
                type="contact-person"
                placeholder="Enter Contact Person Name"
                autoFocus
                value={contact_person}
                onChange={(e) => {
                  console.log(e.target.value);
                  setContact_person(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email ID"
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
          <Button variant="success" onClick={addOrganization}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      {/* console = {log = ()=>{}} */}
      {/* modal -edit organization*/}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Organization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Your Name"
                autoFocus
                value={name}
                onChange={(e) => {
                  console.log(e.target.value);
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter Address"
                autoFocus
                value={address}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="contact-person"
                placeholder="Enter Contact Number"
                autoFocus
                value={contact_no}
                onKeyDown={(e) => {
                  // regex for numeric input only with dot
                  const reg = new RegExp(/^[0-9\b]+$/);
                  if (e.target.value === "" || reg.test(e.key)) {
                    setContact_no(e.target.value);
                  } else {
                    e.preventDefault()
                  }
                }}
                onChange={(e) => {
                  console.log(e.target.value);
                  setContact_no(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Contact Person</Form.Label>
              <Form.Control
                type="contact-person"
                placeholder="Enter Contact Person Name"
                autoFocus
                value={contact_person}
                onChange={(e) => {
                  console.log(e.target.value);
                  setContact_person(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email ID"
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
                onChange={handleSwitch}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={updateOrganization}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Orgs;
