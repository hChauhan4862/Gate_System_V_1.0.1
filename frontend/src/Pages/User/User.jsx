import React,{ useEffect, useState } from 'react'
import './User.css'
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
import TimerWithDate  from '../../Components/Timer/Timer';
// console.log(endpointData)
let endpoint = endpointData.host
// let endpoint = "http://localhost:8082/";

const User = () => {
  const sidebar = localStorage.getItem("sidebar");
  const [time, setTime] = useState(TimerWithDate());
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [org, setOrg] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [userGroup, setUserGroup] = useState([]);
  const [userGroupData, setUserGroupData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [user_img, setUserImg] = useState("");
  const [rfid_card_id, setRfidCardId] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [editData, setEditData] = useState([]);
  const [editId, setEditId] = useState("");
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

// get Users
 function getUsers(){
    const config = {
      headers: { Authorization: `Bearer ${token}`,
      "Content-Type": "application/json" },
    };
  axios.get(endpoint + "user/getAllUsers", config).then((res) => {
    setUsers(res.data);
    console.log(res.data);
  }).catch((err) => {
    console.log(err.response);
  })

  }
 

 useEffect(() => {
  getUsers();
  getOrgData();
  getUserGroupData();
  const interval = setInterval(() => {
    setTime(TimerWithDate());
  }, 1000);
  return () => clearInterval(interval);
}, []);

// datable implementation
var table = $("#userData").DataTable({
  data: users,
  columns: [
    {
      className: "dt-control",
      orderable: false,
      data: id,
      defaultContent: "",
    },
    { data: "user_img",
      render: function (data, type, row) {
        return `<img src="${
          (data === "") ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" :  "data:image/png;base64," + data}" alt="user" class="rounded-circle" width="35" height="35">`;
      },
  },
    { data: "name" },
    { data: "email" },
    { data: "phone_no" },
    { data: "address" },
    { data: "description" },
    { data: "org_name" },
    { data: "user_group_name" },
    { data: "rfid_card_name" },
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
        <a class="action-icon" id="editUser" data-id="${data}" onClick="editUser(${data})">
        <i class="mdi mdi-square-edit-outline"></i>
        </a>
        <a class="action-icon" id="deleteUser" data-id="${data}" onClick="deleteUser(${data})">
        <i class="mdi mdi-delete"></i>
        </a>
        <a class="action-icon" id="viewUser" data-id="${data}" onClick="viewUser(${data})">
        <i class="mdi mdi-qrcode-scan" aria-hidden="true"></i>
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
    title: "Users",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [2, 3, 4, 5, 6, 7, 8, 9, 10], 
    },
  },
  {
    extend: "copy",
    text: "Copy",
    title: "Users",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    extend: "csv",
    text: "Export to CSV",
    title: "Users",
    className: "btn btn-success btn-sm d-none",
    exportOptions: {
      columns: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
  {
    extend: "pdf",
    text: "Export to PDF",
    title: "Users",
    className: "btn btn-success btn-sm d-none",
    orientation: "landscape",
    exportOptions: {
      columns: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
],
});

// implement reload table
useEffect(() => {
  table.clear().draw();
  table.rows.add(users);
  table.columns.adjust().draw();
}, [users]);


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
    $("#userData").DataTable().columns(0).visible(false);
  } else {
    $("#userData").DataTable().columns(0).visible(true);
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


// add user
const addUser = (e) => {
  e.preventDefault();

  const config ={
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  }
  const data = {
    name: name,
    email: email,
    password: password,
    phone_no: phone_no,
    address: address,
    description: description,
    org_id: org,
    user_group_id: userGroup,
    user_img: user_img,
    rfid_card_id: 1

  };
  console.log(data);
 // error handling
  if (name === "") {
    notify("error", "Name is required");
  } else if (email === "") {
    notify("error", "Email is required");
  }
  else if (password === "") {
    notify("error", "Password is required");
  }
  else if (phone_no === "") {
    notify("error", "Phone No is required");
  }
  else if (address === "") {
    notify("error", "Address is required");
  }
  else if (org === "") {
    notify("error", "Organization is required");
  }
  else if (userGroup === "") {
    notify("error", "User Group is required");
  }
  else if (user_img === "") {
    notify("error", "User Image is required");
  }
  else {
    axios.post(endpoint + "user/addUser", data, config).then((res) => {
      if (res.status === 200) {
        notify("success", res.data.message);
        getUsers();
        // console.log(res.data);

      } else {
        return notify("error", res.data.message);
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      notify("error", err.response.data.message || err.response.data);
    });
  }
  // console.log(data);
  // reset form
  setName("");
  setEmail("");
  setPassword("");
  setPhoneNo("");
  setAddress("");
  setDescription("");
  setOrg("");
  setUserGroup("");
  setUserImg("");
  handleClose();




};

// organization data for select option
const getOrgData = () => {
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  axios.get(endpoint + "organization/getAllOrg",config).then((res) => {
    if (res.status === 200) {
      console.log(res.data);
      setOrgData(res.data);
    } else {
      notify("error", res.data.message);
    }
  });
};

// user group data for select option
const getUserGroupData = () => {
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  axios.get(endpoint + "userGroup/getAllUserGroups",config).then((res) => {
    if (res.status === 200) {
      console.log(res.data);
      setUserGroupData(res.data);
    } else {
      notify("error", res.data.message);
    }
  });
};


// delete user
window.deleteUser = (id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this user!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      const config = {
        headers: { Authorization: `Bearer ${token}`,
        "Content-Type": "application/json" },
      };
      axios.delete(endpoint + "user/deleteUser/" + id, config).then((res) => {
        if (res.status === 200) {
          swal("Your records has been deleted!", {
            icon: "success",
          });
          getUsers();
        } else {
          notify("error", res.data.message);
        }
      });
    } else {
      swal("Your user is safe!",{
        icon: "success",
      });
    }
  });

};

// edit user
window.editUser = function editUser(id) {
  handleShowEdit();
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  axios.get(endpoint + "user/getUserById/" + id, config).then((res) => {
    if (res.status === 200) {
      console.log(res.data);
      setEditData(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setPhoneNo(res.data.phone_no);
      setAddress(res.data.address);
      setDescription(res.data.description);
      setOrg(res.data.org_id);
      setUserGroup(res.data.user_group_id);
      // setUserImg(res.data.user_img);
      setRfidCardId(res.data.rfid_card_id);
      setIsActive(res.data.isActive);
      setEditId(res.data.id);


    } else {
      notify("error", res.data.message);
    }
  })
  .catch((err) => {
    notify("error", err.response.data.message || err.response.data);
  });
}

// update user
const updateUser = (e) => {
  e.preventDefault();
  const config = {
    headers: { Authorization: `Bearer ${token}`,
    "Content-Type": "application/json" },
  };
  const data = {
    name: name,
    email: email,
    password: password,
    phone_no: phone_no,
    address: address,
    description: description,
    org_id: org,
    user_group_id: userGroup,
    // user_img: user_img,
    isActive: isActive,
    rfid_card_id: rfid_card_id
  };
  console.log(data);
  // error handling
  if (name === "") {
    notify("error", "Name is required");
  }
  else if (email === "") {
    notify("error", "Email is required");
  }
  else if (password === "") {
    notify("error", "Password is required");
  }
  else if (phone_no === "") {
    notify("error", "Phone No is required");
  }
  else if (address === "") {
    notify("error", "Address is required");
  }
  else if (org === "") {
    notify("error", "Organization is required");
  }
  else if (userGroup === "") {
    notify("error", "User Group is required");
  }
  // else if (user_img === "") {
  //   notify("error", "User Image is required");
  // }
  else {
    axios.put(endpoint + "user/editUser/" + editId, data, config).then((res) => {
      if (res.status === 200) {
        notify("success", res.data.message);
        getUsers();
        // console.log(res.data);

      } else {
        return notify("error", res.data.message);
      }
    })
    .catch((err) => {
      console.log(err.response.data);
      notify("error", err.response.data.message || err.response.data);
    });
  }
  // console.log(data);
  // reset form
  setName("");
  setEmail("");
  setPassword("");
  setPhoneNo("");
  setAddress("");
  setDescription("");
  setOrg("");
  setUserGroup("");
  setUserImg("");
  handleCloseEdit();
};

// view user
window.viewUser = function viewUser(id) {
  handleShowView();
};

// update card
const updateCard = (e) => {
  e.preventDefault();
  handleCloseView();
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
          <h2>Users</h2>
          <div id="main"></div>
        </div>


        <div className="b-title-right">
          <ul className="short-bread">
            <li>Home</li>
            <li>
              <span>Users</span>
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
              <i className="mdi mdi-plus-circle me-2"></i> Add User
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
                    $("#userData").DataTable().button(0).trigger();
                  }}
                >
                  Print
                </Dropdown.Item>
                <Dropdown.Item
                  id="copy_id"
                  onClick={() => {
                    $("#userData").DataTable().button(1).trigger();
                  }}
                >
                  Copy
                </Dropdown.Item>
                <Dropdown.Item
                  id="csv_id"
                  onClick={() => {
                    $("#userData").DataTable().button(2).trigger();
                  }}
                >
                  CSV
                </Dropdown.Item>
                <Dropdown.Item
                  id="pdf_id"
                  onClick={() => {
                    $("#userData").DataTable().button(3).trigger();
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
            id="userData"
            className="table table-striped border dt-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>
                </th>
                <th>Profile Pic</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Description</th>
                <th>Organization</th>
                <th>Depatment/Group</th>
                <th>RFID Card</th>
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
          <Modal.Title>Add User</Modal.Title>
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
              <Form.Label>Department/Group</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={userGroup}
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserGroup(e.target.value);
                }}
              >
                <option value={" "}>Select Department/Group</option>
                {userGroupData.map((item) => (
                  <option value={item.id}>{item.group_name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Full Name</Form.Label>
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
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="email"
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
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                autoFocus
                value={password}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);

                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phone No"
                autoFocus
                value={phone_no}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPhoneNo(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Adress</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={address}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddress(e.target.value);
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Upload Image</Form.Label>
              {/* // image upload */}
              <Form.Control 
              type="file"
              placeholder="Enter Phone No"
              autoFocus 
              onChange={(e) => {
                console.log(e.target.files[0]);
                setUserImg(e.target.files[0]);
              }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" 
          onClick={addUser}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


      {/* --------------------------------------edit modal------------------------------------------------- */}

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
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
              <Form.Label>Department/Group</Form.Label>
              {/* //Dropdown for org */}
              <Form.Select
                aria-label="Default select example"
                value={userGroup}
                onChange={(e) => {
                  console.log(e.target.value);
                  setUserGroup(e.target.value);
                }}
              >
                <option value={" "}>Select Department/Group</option>
                {userGroupData.map((item) => (
                  <option value={item.id}>{item.group_name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Full Name</Form.Label>
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
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Id"
                autoFocus
                value={email}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);

                }}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                autoFocus
                value={password}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPassword(e.target.value);

                }}
              />
            </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Phone No"
                autoFocus
                value={phone_no}
                onChange={(e) => {
                  console.log(e.target.value);
                  setPhoneNo(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Adress</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={address}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddress(e.target.value);
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
          onClick={updateUser}
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

export default User



{/* <Form.Group
className="mb-3"
controlId="exampleForm.ControlTextarea1"
>
<img src={(user_img === "") ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" :  "data:image/png;base64," + user_img} alt='user image' width='100px' height='100px'/>
<Form.Label>Upload Image</Form.Label>
{/* // image upload */}
{/* <Form.Control 
type="file"
placeholder="Enter Phone No"
autoFocus 
onChange={(e) => {
  console.log(e.target.files[0]);
  setUserImg(e.target.files[0]);
}}
/> */}
// </Form.Group> */}