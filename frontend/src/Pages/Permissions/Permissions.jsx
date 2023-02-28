import React,{useEffect, useState} from 'react'
import './Permissions.css'
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

const Permissions = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [permissionData, setPermissionData] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handelSwitch = () => {
    setIsActive(!isActive);
  };

  // get permission data
  function getPermission() {
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
    }
    axios.get(endpoint + "permission/getAllPermissions" , config)
    .then((res) => {
      setPermissionData(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

   



  useEffect(() => {
    getPermission();
    
  }, []);


    // datable implementation
var table = $("#permission").DataTable({
  data: permissionData,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: id,
      defaultContent: "",
    },
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
        <a class="action-icon" id="editPermission" data-id="${data}" onClick="editPermission(${data})">
        <i class="mdi mdi-square-edit-outline"></i>
        </a>
        <a class="action-icon" id="deletePermission" data-id="${data}" onClick="deletePermission(${data})">
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
    title: "Permission",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3],
    },
  },
  {
    extend: "copy",
    text: "Copy",
    title: "Permission",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3],
    },
  },
  {
    extend: "csv",
    text: "Export to CSV",
    title: "Permission",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3],
    },
  },
  {
    extend: "pdf",
    text: "Export to PDF",
    title: "Permission",
    className: "btn btn-success btn-sm d-none",
    orientation: "landscape",
    exportOptions: {
      columns: [1,2,3],
    },
  },
],
});

// implement reload table
useEffect(() => {
  table.clear().draw();
  table.rows.add(permissionData);
  table.columns.adjust().draw();
}, [permissionData]);

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
    $("#permission").DataTable().columns(0).visible(false);
  } else {
    $("#permission").DataTable().columns(0).visible(true);
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

// add permission
const addPermission = (e) => {
  e.preventDefault();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  const data = {
    name: name,
    description: description,
  };
  axios.post(endpoint + "permission/addPermission", data, config)
  .then((res) => {
    if(res.status === 201){
      notify("success", res.data.message);
      getPermission();
  }else{
    notify("error", res.data.message);
  }
  })
  .catch((err) => {
    console.log(err);
    notify("error", err.response.data);
  });

  // clear form
  setName("");
  setDescription("");
  handleClose();
}


// edit permission
window.editPermission = function editPermission(id) {
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  handleShowEdit();
  axios.get(endpoint + "permission/getPermissionById/" + id, config)
  .then((res) => {
    if(res.status === 200){
      setId(res.data.id);
      setName(res.data.name);
      setDescription(res.data.description);
      setIsActive(res.data.isActive);
  }else{
    notify("error", res.data.message);
  }
  })
  .catch((err) => {
    console.log(err);
    notify("error", err.response.data);
  });
}

// update permission
const updatePermission = (e) => {
  e.preventDefault();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  const data = {
    name: name,
    description: description,
    isActive: isActive,
  };
  axios.put(endpoint + "permission/editPermissionById/" + id, data, config)
  .then((res) => {
    if(res.status === 200){
      notify("success", res.data.message);
      getPermission();
  }else{
    notify("error", res.data.message);
  }
  })
  .catch((err) => {
    console.log(err);
    notify("error", err.response.data);
  });

  // clear form
  setId("");
  setName("");
  setDescription("");
  setIsActive("");
  handleCloseEdit();
}

// delete permission
window.deletePermission = function deletePermission(id) {
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
      axios.delete(endpoint + "permission/deletePermissionById/" + id, config)
      .then((res) => {
        if(res.status === 200){
          swal("Your records has been deleted!", {
            icon: "success",
          });
          getPermission();
      }else{
        notify("error", res.data.message);
      }
      })
      .catch((err) => {
        console.log(err);
        notify("error", err.response.data);
      });
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
          <h2>Permission</h2>
          <div id="main"></div>
        </div>


        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Permission</span>
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
              <i className="mdi mdi-plus-circle me-2"></i> Add Permission
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
            </Dropdown>
          </div>
        </div>
        <div className="card-body">
          <table
            id="permission"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                </th>
                <th>Permission</th>
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
          <Modal.Title>Add Permission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Permission</Form.Label>
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
          onClick={addPermission}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


       {/* --------------------------------------Edit modal------------------------------------------------- */}

       <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Permission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Permission</Form.Label>
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
          onClick={updatePermission}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

  </main>
  )
}

export default Permissions