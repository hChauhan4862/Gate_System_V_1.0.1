import React,{useEffect, useState} from 'react'
import './Roles.css'
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

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host


const Roles = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [id, setId] = useState("");
  const[org, setOrg] = useState("");
  const [role, setRole] = useState("");
  const [permission, setPermission] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [roleData, setRoleData] = useState([]);
  const [orgData, setOrgData] = useState([]);
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


  // get Users
 function getRoles(){
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
   axios.get(endpoint + "userGroup/getAllUserGroups", config).then((res) => {
      console.log(res.data)
      setRoleData(res.data)
    }).catch((err) => {
      console.log(err)
    })

 }
  
  useEffect(() => {
    getRoles();
    getOrgData();
    getPermissionData();
  }, [])
 
  // datable implementation
var table = $("#userGroup").DataTable({
  data: roleData,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: id,
      defaultContent: "",
    },
    { data: "org_name" },
    { data: "group_name" },
    { data: "permission_name" },
    {
      data: "isActive",
      render: function (data, type, row) {
        if (data === true) {
          return `<span class="badge bg-success">Active</span>`;
        } else {
          return `<span class="badge bg-danger">Inactive</span>`;
        }
      },
    },
    {
      data: "id",
      render: function (data, type, row) {
        return `<div class="action-buttons">
        <a class="edit" id="editRole" data-id="${data}" onClick="editRole(${data})">
        <i class="fa fa-pencil"></i>
        </a>
        <a class="delete" id="deleteRole" data-id="${data}" onClick="deleteRole(${data})">
        <i class="fa fa-trash"></i>
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
    title: "Roles",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4],
    },
  },
  {
    extend: "copy",
    text: "Copy",
    title: "Roles",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4],
    },
  },
  {
    extend: "csv",
    text: "Export to CSV",
    title: "Roles",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [1,2,3,4],
    },
  },
  {
    extend: "pdf",
    text: "Export to PDF",
    title: "Roles",
    className: "btn btn-success btn-sm d-none",
    orientation: "landscape",
    exportOptions: {
      columns: [1,2,3,4],
    },
  },
],
});

// implement reload table
useEffect(() => {
  table.clear().draw();
  table.rows.add(roleData);
  table.columns.adjust().draw();
}, [roleData]);


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
    $("#userGroup").DataTable().columns(0).visible(false);
  } else {
    $("#userGroup").DataTable().columns(0).visible(true);
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
  const config ={
    headers: {
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

// get permission data
function getPermissionData(){
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
    axios.get(endpoint + "permission/getAllPermissions", config).then((res) => {
      console.log(res.data)
      setPermissionData(res.data)
    }).catch((err) => {
      notify("error", err.response.data.message);
    })
}


// add role
  const addRole = (e) => {
    e.preventDefault();
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
  }
    const data = {
      org_id: org,
      group_name: role,
      permission_id: permission,
    }
    axios.post(endpoint + "userGroup/addUserGroup", data, config).then((res) => {
      if(res.status === 201){
        notify("success", res.data.message);
        getRoles()

      }else{
        notify("error", res.data.message);
      }
    }).catch((err) => {
      console.log(err.response.data)
      notify("error", err.response.data);
    }
    )
    //reset form
    setOrg("")
    setRole("")
    setPermission("")
    handleClose();
  }

//edit role
window.editRole = function editRole(id) {
  handleShowEdit()
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  axios.get(endpoint + "userGroup/getUserGroupById/" + id, config).then((res) => {
    if(res.status === 200){
      console.log(res.data)
      setId(res.data.id)
      setOrg(res.data.org_id)
      setRole(res.data.group_name)
      setPermission(res.data.permission_id)
      setIsActive(res.data.isActive)
    }else{
      notify("error", res.data.message);
    }
  }).catch((err) => {
    notify("error", err.response.data.message);
  })
}

// update role
const updateRole = (e) => {
  e.preventDefault();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
}
  const data = {
    org_id: org,
    group_name: role,
    permission_id: permission,
    isActive: isActive,
  }
  console.log(data)
  axios.put(endpoint + "userGroup/editUserGroupById/"+ id , data, config).then((res) => {
    if(res.status === 200){
      notify("success", res.data.message);
      getRoles()
    }else{
      notify("error", res.data.message);
    }
  }).catch((err) => {
    console.log(err)
    notify("error", err.response.data);
  }
  )
  //reset form
  setOrg("")
  setRole("")
  setPermission("")
  setIsActive("")
  handleCloseEdit();
}


// delete role
window.deleteRole = function deleteRole(id) {
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
      axios.delete(endpoint + "userGroup/deleteUserGroupById/" + id, config).then((res) => {
        if (res.status === 200) {
          swal("Your records has been deleted!", {
            icon: "success",
          });
          getRoles()
        }else{
          notify("error", res.data.message);
        }
      }).catch((err) => {
        notify("error", err.response.data);
      })
    } else {
      swal("Your user is safe!", {
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
      
      <div className="body-title">
        <div className="b-title-left">
          <h2>Roles</h2>
          <div id="main"></div>
        </div>


        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Roles</span>
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
              <i className="mdi mdi-plus-circle me-2"></i> Add Role
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
                    $("#userGroup").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#userGroup").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#userGroup").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#userGroup").DataTable().button(3).trigger();
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
            id="userGroup"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                </th>
                <th>Organization</th>
                <th>Role</th>
                <th>Permission</th>
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
          <Modal.Title>Add Role</Modal.Title>
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
              <Form.Label>Permission</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={permission}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPermission(e.target.value);
                }}
              >
                <option value={" "}>Select Permission</option>
                {permissionData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Roles</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={role}
                onChange={(e) => {
                  console.log(e.target.value);
                  setRole(e.target.value);
                }}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={addRole}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


                  {/* --------------------------------------Edit modal------------------------------------------------- */}

                  <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Role</Modal.Title>
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
              <Form.Label>Permission</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={permission}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPermission(e.target.value);
                }}
              >
                <option value={" "}>Select Permission</option>
                {permissionData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Roles</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={role}
                onChange={(e) => {
                  console.log(e.target.value);
                  setRole(e.target.value);
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
          onClick={updateRole}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


  </main>
  )
}

export default Roles