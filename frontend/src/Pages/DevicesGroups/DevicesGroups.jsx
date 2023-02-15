import React,{useEffect, useState} from 'react'
import './DevicesGroups.css'
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

const DevicesGroups = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [operation, setOperation] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [devicesGroup, setDevicesGroup] = useState([]);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handelSwitch = () => {
    setIsActive(!isActive);
  };


  // get all devices groups
  function getDevicesGroup (){
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
    }
    axios.get(endpoint + 'deviceType/getAllDeviceTypes', config)
    .then((res) => {
      console.log(res.data)
      setDevicesGroup(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getDevicesGroup()
  }, [])

  // datable implementation
  var table = $("#devicesType").DataTable({
    data: devicesGroup,
    columns: [
      {
        className: "dt-control",
        orderable: false,
        data: id,
        defaultContent: "",
      },
      { data: "name" },
      { data: "operation" },
      { data: "description" },
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
          <a class="edit" id="editDeviceType" data-id="${data}" onClick="editDeviceType(${data})">
          <i class="fa fa-pencil"></i>
          </a>
          <a class="delete" id="deleteDeviceType" data-id="${data}" onClick="deleteDeviceType(${data})">
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
  title: "Doors",
  className: "btn btn-success btn-sm d-none",
  exportOptions: {
    columns: [1,2,3,4],
  },
},
{
  extend: "copy",
  text: "Copy",
  title: "Doors",
  className: "btn btn-success btn-sm d-none",
  exportOptions: {
    columns: [1,2,3,4],
  },
},
{
  extend: "csv",
  text: "Export to CSV",
  title: "Doors",
  className: "btn btn-success btn-sm d-none",
  exportOptions: {
    columns: [1,2,3,4],
  },
},
{
  extend: "pdf",
  text: "Export to PDF",
  title: "Doors",
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
  table.rows.add(devicesGroup);
  table.columns.adjust().draw();
}, [devicesGroup]);


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
          $("#devicesType").DataTable().columns(0).visible(false);
        } else {
          $("#devicesType").DataTable().columns(0).visible(true);
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
      

// add new device type
const addDeviceType = (e) => {
  e.preventDefault();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  const data = {
    name: name,
    operation: operation,
    description: description,
  }
  console.log(data)
  axios.post(endpoint + 'deviceType/addDeviceType', data, config)
  .then((res) => {
    console.log(res.data)
    if(res.status === 201){
      notify("success", res.data.message)
      getDevicesGroup();
    }else{
      notify("error", res.data.message)
    }
  })
  .catch((err) => {
    console.log(err)
    notify("error", err.response.data)
  })
// reset form
  setName("")
  setOperation("")
  setDescription("")
  handleClose()

}

// edit device type
window.editDeviceType = function editDeviceType(id){
  handleShowEdit();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  axios.get(endpoint + 'deviceType/getDeviceTypeById/' + id, config)
  .then((res) => {
    console.log(res.data)
    if(res.status === 200){
      setId(res.data.id)
      setName(res.data.name)
      setOperation(res.data.operation)
      setDescription(res.data.description)
      setIsActive(res.data.isActive)
    }else{
      notify("error", res.data.message)
    }
  })
}

const updateDeviceType = (e) => {
  e.preventDefault();
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  const data = {
    name: name,
    operation: operation,
    description: description,
    isActive: isActive,
  }
  console.log(data)
  axios.put(endpoint + 'deviceType/editDeviceType/' + id, data, config)
  .then((res) => {
    console.log(res.data)
    if(res.status === 200){
      notify("success", res.data.message)
      getDevicesGroup();
    }else{
      notify("error", res.data.message)
    }
  })
  .catch((err) => {
    console.log(err)
    notify("error", err.response.data)
  })

  // reset form
  setName("")
  setOperation("")
  setDescription("")
  handleCloseEdit()
}
  

// delete device type
window.deleteDeviceType = function deleteDeviceType(id){
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
  axios.delete(endpoint + 'deviceType/deleteDeviceType/' + id, config)
  .then((res) => {
    console.log(res.data)
    if(res.status === 200){
      swal("Your records has been deleted!", {
        icon: "success",
      });
      getDevicesGroup();
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
    <div className="body-title">
        <div className="b-title-left">
          <h2>Devices Group</h2>
          <div id="main"></div>
        </div>


        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Devices Group</span>
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
              <i className="mdi mdi-plus-circle me-2"></i> Add Device Group
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
                    $("#devicesType").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#devicesType").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#devicesType").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#devicesType").DataTable().button(3).trigger();
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
            id="devicesType"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                </th>
                <th>Device Group Name</th>
                <th>Operation</th>
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
          <Modal.Title>Add Device Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Device Group Name</Form.Label>
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
              <Form.Label>Operation</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Operation"
                autoFocus
                value={operation}
                onChange={(e) => {
                  console.log(e.target.value);
                  setOperation(e.target.value);
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
                placeholder="Enter Description"
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
          onClick={addDeviceType}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


      {/* --------------------------------------Edit modal------------------------------------------------- */}

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Device Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Device Group Name</Form.Label>
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
              <Form.Label>Operation</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Operation"
                autoFocus
                value={operation}
                onChange={(e) => {
                  console.log(e.target.value);
                  setOperation(e.target.value);
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
                placeholder="Enter Description"
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
          onClick={updateDeviceType}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

  </main>
  )
}

export default DevicesGroups