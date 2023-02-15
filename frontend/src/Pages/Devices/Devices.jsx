import React,{useEffect, useState} from 'react'
import './Devices.css'
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

// import divicePage from '../../../../backend/src/devices.html'

import endpointData from '../../endpoint.json'
// console.log(endpointData)
let endpoint = endpointData.host

const Devices = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [devices, setDevices] = useState([]);
  const [id, setId] = useState("");
  const [friendlyName, setFriendlyName] = useState("");
  const [locationId, setLocationId] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [path, setPath] = useState("");
  const [	pnpId, setPnpId] = useState("");
  const [	productId, setProductId] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [vendorId, setVendorId] = useState("");
  const [isActive, setIsActive] = useState("");
  const [devicesType , setDevicesType] = useState("");
  const [door_id , setDoor_id] = useState("");
  const [connectDevices, setConnectDevices] = useState([]);
  const [deviceTypeData, setDeviceTypeData] = useState([]);
  const [doorData, setDoorData] = useState([]);
  const [filter , setFilter] = useState("");

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showMap, setShowMap] = useState(false);
 const  handleShowMap = () => setShowMap(true);
  const  handleCloseMap = () => setShowMap(false);

  const handelSwitch = () => {
    setIsActive(!isActive);
  };

// get all devices
function getDevices() {
  const config ={
    headers: {
      "Content-Type": "application/json",
    },
  }
  axios.get(endpoint + "devicesSetup/getAllDevices", config)
  .then((res) => {
    setDevices(res.data);
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
}

useEffect(() => {
  getDevices();
  getConnectDevices();
  getDeviceTypes();
  getDoors();
}, []);

// datable implementation
var table = $("#devices").DataTable({
  data: devices,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: id,
      defaultContent: "",
    },
    { data: "path" },
    { data: "manufacturer" },
    // { data: "friendlyName" },
    // { data: "locationId" },
    // { data: "pnpId" },
    { data: "productId" },
    { data: "serialNumber" },
    { data: "vendorId" },
    { data: "device_type_name" },
    { data: "door_name" },
    { data: "devices_type_opration" },
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
        <a class="edit" id="editDevice" data-id="${data}" onClick="editDevice(${data})">
        <i class="fa fa-pencil"></i>
        </a>
        <a class="delete" id="deleteDevice" data-id="${data}" onClick="deleteDevice(${data})">
        <i class="fa fa-trash"></i>
        </a>
        <a class="map" id="mapDevice" data-id="${data}" onClick="mapDevice(${data})">
        <i class="fa fa-map-signs"></i>
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
    columns: [1,2,3,4,5,6,7,8,9],
  },
},
{
  extend: "copy",
  text: "Copy",
  title: "Doors",
  className: "btn btn-success btn-sm d-none",
  exportOptions: {
    columns: [1,2,3,4,5,6,7,8,9],
  },
},
{
  extend: "csv",
  text: "Export to CSV",
  title: "Doors",
  className: "btn btn-success btn-sm d-none",
  exportOptions: {
    columns: [1,2,3,4,5,6,7,8,9],
  },
},
{
  extend: "pdf",
  text: "Export to PDF",
  title: "Doors",
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
  table.rows.add(devices);
  table.columns.adjust().draw();
}, [devices]);


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
  if (window.innerWidth >= 1600) {
    $("#devices").DataTable().columns(0).visible(false);
  } else {
    $("#devices").DataTable().columns(0).visible(true);
  }
}

getScreanSize();
// resize window
$(window).resize(function () {
  if ($(window).width() >= 1600) {
    table.column(0).visible(false);
  } else {
    table.column(0).visible(true);
  }
});

  // add new device
  const addDevice = (e) => {
    e.preventDefault();
    console.log("add device");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
let incomingData = e.target.dataset
const data = {
  path : incomingData.path,
  manufacturer : incomingData.manufacturer,
  friendlyName : incomingData.friendlyname,
  locationId : incomingData.locationid,
  pnpId : incomingData.pnpid,
  productId : incomingData.productid,
  serialNumber : incomingData.serialnumber,
  vendorId : incomingData.vendorid,
}
    axios.post(endpoint + "devicesSetup/addDevice", data, config)
    .then((res) => {
      console.log(res.data);
      getDevices();
      getConnectDevices();
      notify("success", "Device Added Successfully");
    })
    .catch((err) => {
      console.log(err);
    }
    );
  };


  // refresh list
  const refreshList = () => {
    getDevices();
    getConnectDevices();
  };
  

// this for get connect devices
  let data;

  // get connect devices
  function getConnectDevices() {
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
    }
    axios.get(endpoint + "devicesSetup/getPorts", config)
    .then((res) => {
      setConnectDevices(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // get all deviceTypes
  function getDeviceTypes() {
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
    }
    axios.get(endpoint + "deviceType/getAllDeviceTypes", config)
    .then((res) => {
      setDeviceTypeData(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // get all doors
  function getDoors() {
    const config ={
      headers: {
        "Content-Type": "application/json",
      },
    }
    axios.get(endpoint + "doors/getAllDoors", config)
    .then((res) => {
      setDoorData(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  // edit device
  window.editDevice = function editDevice(id) {
    handleShowEdit();
    console.log(id);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.get(endpoint + "devicesSetup/getDeviceById/" + id, config)
    .then((res) => {
      console.log(res.data);
      data = res.data;
      setId(data.id);
      setPath(data.path);
      setManufacturer(data.manufacturer);
      setFriendlyName(data.friendlyName);
      setLocationId(data.locationId);
      setPnpId(data.pnpId);
      setProductId(data.productId);
      setSerialNumber(data.serialNumber);
      setVendorId(data.vendorId);
      setDevicesType(data.devicesType);
      setDoor_id(data.door_id);
      setIsActive(data.isActive);

    })
  };

  // update device
  const updateDevice = (e) => {
    e.preventDefault();
    console.log("update device");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      path: path,
      manufacturer: manufacturer,
      friendlyName: friendlyName,
      locationId: locationId,
      pnpId: pnpId,
      productId: productId,
      serialNumber: serialNumber,
      vendorId: vendorId,
      devicesType: devicesType,
      door_id: door_id,
      isActive: isActive,
    };
    axios.put(endpoint + "devicesSetup/editDeviceById/" + id, data, config)
    .then((res) => {
      console.log(res.data);
      getDevices();
      getConnectDevices();
      notify("success", "Device Updated Successfully");
    })
    .catch((err) => {
      notify("error", err.response.data);
      console.log(err);
    });

  // clear form
  setFriendlyName("");
  setPath("");
  setManufacturer("");
  setLocationId("");
  setPnpId("");
  setProductId("");
  setSerialNumber("");
  setVendorId("");
  setDevicesType("");
  setDoor_id("");
  setIsActive("");
  handleCloseEdit();
}


// delete devices
window.deleteDevice = function deleteDevice(id) {
  console.log(id);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this recird!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios.delete(endpoint + "devicesSetup/deleteDeviceById/" + id, config)
      .then((res) => {
        console.log(res.data);
        if(res.status === 200){
          swal("Your records has been deleted!", {
            icon: "success",
          });
          getDevices();
          getConnectDevices();
        }
        else{
          notify("error", res.data.message)
        }
      })
      .catch((err) => {
        console.log(err);
        notify("error", err.response.data)
      });
    } else {
      swal("Your Record is safe!", {
        icon: "success",
      });
    }
  });
}


// map devices
window.mapDevice = function mapDevice(id) {
  console.log(id);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios.get(endpoint + "devicesSetup/getDeviceById/" + id, config)
  .then((res) => {
    console.log(res.data);
    data = res.data;
    setId(data.id);
    setDevicesType(data.devicesType);
    setDoor_id(data.door_id);
    handleShowMap();
  })

  // mapedDevice
}

const mapedDevice = (e) => {
  e.preventDefault();
  console.log("maped device");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = {
    devicesType: devicesType,
    door_id: door_id,
  };
  axios.put(endpoint + "devicesSetup/mapDevice/" + id, data, config)
  .then((res) => {
    console.log(res.data);
    getDevices();
    getConnectDevices();
    notify("success", "Device Maped Successfully");
  })
  .catch((err) => {
    notify("error", err.response.data);
    console.log(err);
  });
  // reset form
  setDevicesType("");
  setDoor_id("");
  handleCloseMap();
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
          <h2>Devices</h2>
          <div id="main"></div>
        </div>


        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Devices</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
        <div className="card">
              <div className="card-title">
              <div className="title-left">
                  <h4>Live Devices</h4>
                </div>
                <div className="title-right">
                  
                </div>
              </div>
              <div className="card-body">
              <div className="device-list">
                search
                <i class="fa fa-retweet refresh-list" aria-hidden="true" onClick={refreshList} ></i>
                <ul className=''>
                  {connectDevices.map((C_device, index) => (
                  data = {path: C_device.port.path,
                          manufacturer: C_device.port.manufacturer,
                          serialNumber: C_device.port.serialNumber,
                          pnpId: C_device.port.pnpId,
                          vendorId: C_device.port.vendorId,
                          productId: C_device.port.productId,
                          locationId: C_device.port.locationId,
                          friendlyName: C_device.port.friendlyName,
                          } ,
                    <li>

                      <span className="list-status"><i class="fa fa-circle" aria-hidden="true"></i></span>
                      {data.path}
                      {
                      (!devices.some(d=> d.path === data.path)) ? 
                      <span className="add-list" ><i class="fa fa-plus-circle add-data" aria-hidden="true"
                            data-path={data.path} 
                            data-manufacturer={data.manufacturer} 
                            data-serialNumber={data.serialNumber} 
                            data-pnpId={data.pnpId} 
                            data-vendorId={data.vendorId} 
                            data-productId={data.productId} 
                            data-id={index+1} 
                            data-locationId={data.locationId} 
                            data-friendlyName={data.friendlyName}
                            onClick={addDevice}
                      ></i></span>
                      :
                      ""
                      }

                    </li>
                  ))}

                  
                  </ul>
              </div>
             
              </div>
            </div>
        </div>
        <div className="col-md-9">
        <div className="card">
        <div className="card-title">
          <div className="title-left">
            {/* <a
              // href="#"
              href="./src/devices.html"
              className="btn btn-success"
              // onClick={handleShow}
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              
            >
              <i className="mdi mdi-plus-circle me-2"></i> Add Device
            </a> */}
            Listed Devices in DB
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
                    $("#devices").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#devices").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#devices").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#devices").DataTable().button(3).trigger();
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
            id="devices"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                </th>
                <th>Port</th>
                <th>Manufacturer</th>
                {/* <th>FriendlyName</th>
                <th>LocationId</th>
                <th>pnpId</th> */}
                <th>productId</th>
                <th>serialNumber</th>
                <th>vendorId</th>
                <th>Device Group</th>
                <th>Door</th>
                <th>Operation</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
        </div>
      </div>


{/* -------------------------------------- Edit modal------------------------------------------------- */}

<Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Devices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Devices Group</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={devicesType}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDevicesType(e.target.value);
                }}
              >
                <option value={" "}>Select Device Group</option>
                {deviceTypeData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Door</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={door_id}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDoor_id(e.target.value);
                }}
              >
                <option value={" "}>Select Door</option>
                {doorData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Device Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={friendlyName}
                onChange={(e) => {
                  console.log(e.target.value);
                  setFriendlyName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Location ID</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={locationId}
                onChange={(e) => {
                  console.log(e.target.value);
                  setLocationId(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={manufacturer}
                onChange={(e) => {
                  console.log(e.target.value);
                  setManufacturer(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Port No</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={path}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPath(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pnp Id</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={pnpId}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPnpId(e.target.value);
                }}
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Product Id</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={productId}
                onChange={(e) => {
                  console.log(e.target.value);
                  setProductId(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Serial No</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={serialNumber}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSerialNumber(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Vendor Id</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Role"
                autoFocus
                value={vendorId}
                onChange={(e) => {
                  console.log(e.target.value);
                  setVendorId(e.target.value);
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
          onClick={updateDevice}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      

{/* -------------------------------------- Map modal------------------------------------------------- */}

<Modal show={showMap} onHide={handleCloseMap}>
        <Modal.Header closeButton>
          <Modal.Title>Map Devices</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Devices Group</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={devicesType}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDevicesType(e.target.value);
                }}
              >
                <option value={" "}>Select Device Group</option>
                {deviceTypeData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Door</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={door_id}
                onChange={(e) => {
                  console.log(e.target.value);
                  setDoor_id(e.target.value);
                }}
              >
                <option value={" "}>Select Door</option>
                {doorData.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={mapedDevice}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


  </main>
  )
}

export default Devices;