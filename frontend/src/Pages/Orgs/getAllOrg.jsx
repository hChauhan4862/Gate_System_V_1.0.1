// import React, { useEffect, useState } from "react";
// import "./Orgs.css";
// import "jszip";
// import $ from "jquery";
// import Dropdown from "react-bootstrap/Dropdown";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import OrgData from "../../Data/org.json";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// let endpoint = 'http://localhost:8082/';



// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <p
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {/* custom icon */}
//     {children}
//   </p>
// ));

// const Orgs = () => {
//   // side bar from local storage
//   const sidebar = localStorage.getItem("sidebar");

//   const [orgData, setOrgData] = useState();
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [c_adress, setC_adress] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [contact_person, setContact_person] = useState("");
//   const [description, setDescription] = useState("");
//   const [status, setStatus] = useState("");

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);



// // api get all orgs
//     axios.get(endpoint + 'organization/getAllOrg').then((response) => {
//       // setOrgData(response.data);
//     }).catch((error) => {
//       console.log(error);
//     });


// console.log(orgData);




//   /* Formatting function for row details - modify as you need */
//   function format(d) {
//     // `d` is the original data object for the row
//     return (
//       '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
//       "<tr>" +
//       "<td> Adress:</td>" +
//       "<td>" +
//       d.c_adress +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>Contact No:</td>" +
//       "<td>" +
//       d.contact +
//       "</td>" +
//       "</tr>" +
//       "<td>Contact Person:</td>" +
//       "<td>" +
//       d.contact_person +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>Description:</td>" +
//       "<td>" +
//       d.description +
//       "</td>" +
//       "</tr>" +
//       "<td>Email Id:</td>" +
//       "<td>" +
//       d.email +
//       "</td>" +
//       "</tr>" +
//       "<td>Status No:</td>" +
//       "<td>" +
//       d.status +
//       "</td>" +
//       "</tr>" +
//       "<td>Actions:</td>" +
//       "<td>" +
//       '<div class="action-buttons">' +
//       '<span class="edit"><i class="mdi mdi-square-edit-outline"></i></span> ' +
//       '<span class="remove"><i class="mdi mdi-delete"></i></span> ' +
//       '<span class="cancel"></span>' +
//       "</div>" +
//       "</td>" +
//       "</table>"
//     );
//   }

//   //Notification Tost
//   const notify = (action, msg) => {
//     toast[action](msg, {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       style: {
//         fontSize: "16px",
//         top: "50px",
//       },
      
      
//       });

      
//   }

//   // Data Table Function
//   function DataTable(){
//     var table = $("#orgData").DataTable({
//       data: orgData,
//       columns: [
//         {
//           className: "dt-control",
//           orderable: false,
//           data: id,
//           defaultContent: "",
//         },
//         { data: "name" },
//         { data: "c_adress" },
//         { data: "email" },
//         { data: "contact" },
//         { data: "contact_person" },
//         { data: "description" },
//         { data: "status" },
//         {
//           data: null,
//           defaultContent:
//             '<div class="action-buttons">' +
//             '<span class="edit"><i class="mdi mdi-square-edit-outline "></i></span> ' +
//             '<span class="remove"><i class="mdi mdi-delete"></i></span> ' +
//             '<span class="cancel"></span>' +
//             "</div>",
//           className: "row-edit dt-center",
//           orderable: false,
//         },
//       ],
//       select: {
//         style: "os",
//         selector: "td:first-child",
//       },
//       responsive: true,
//       retrieve: true,
//       dom: "lBfrtip",
//       buttons: [
//         {
//           extend: "print",
//           text: "Print",
//           className: "btn btn-success btn-sm d-none",
//           exportOptions: {
//             columns: [1, 2, 3, 4, 5, 6, 7],
//           },
//         },
//         {
//           extend: "copy",
//           text: "Copy",
//           className: "btn btn-success btn-sm d-none",
//           exportOptions: {
//             columns: [1, 2, 3, 4, 5, 6, 7],
//           },
//         },
//         {
//           extend: "csv",
//           text: "Export to CSV",
//           className: "btn btn-success btn-sm d-none",
//           exportOptions: {
//             columns: [1, 2, 3, 4, 5, 6, 7],
//           },
//         },
//         {
//           extend: "pdf",
//           text: "Export to PDF",
//           className: "btn btn-success btn-sm d-none",
//           exportOptions: {
//             columns: [1, 2, 3, 4, 5, 6, 7],
//           },
//         },
//         {
//           // edit record form
//           text: "Add",
//           className: "btn btn-success btn-sm d-none",
//           action: function (e, dt, node, config) {
//             handleShow();
//           },
//         },
//         // edit record form
//         {
//           text: "Edit",
//           className: "btn btn-success btn-sm d-none",
//           action: function (e, dt, node, config) {
//             handleShow();
//           },
//         },
//         // delete record form
//         {
//           text: "Delete",
//           className: "btn btn-success btn-sm d-none",
//           action: function (e, dt, node, config) {
//             handleShow();
//           },
//         },
//       ],
//     });

//         // Add event listener for opening and closing details
//         $("#orgData tbody").on("click", "td.dt-control", function () {
//           var tr = $(this).closest("tr");
//           var row = table.row(tr);
    
//           if (row.child.isShown()) {
//             // This row is already open - close it
//             row.child.hide();
//             tr.removeClass("shown");
//           } else {
//             // Open this row
//             row.child(format(row.data())).show();
//             tr.addClass("shown");
//           }
//         });
    
//         // mdi-square-edit-outline use for edit data
//         $("#orgData tbody").on("click", "span.edit", function () {
//           var tr = $(this).closest("tr");
//           var row = table.row(tr);
//           var data = row.data();
//           // console.log(data);
//           handleShow();
//         });
    
//         // mdi-delete use for delete data
//         $("#orgData tbody").on("click", "span.remove", function () {
//           var tr = $(this).closest("tr");
//           var row = table.row(tr);
//           var data = row.data();
//           // console.log(data);
//           handleShow();
//         });
    
//         $(window).resize(function () {
//           if ($(window).width() >= 768) {
//             table.column(0).visible(false);
//           } else {
//             table.column(0).visible(true);
//           }
//         });
    
//   }
  
//   //Get Screan Size and use for + - icon
//   function getScreanSize() {
//     if (window.innerWidth >= 768) {
//       $("#orgData").DataTable().columns(0).visible(false);
//     } else {
//       $("#orgData").DataTable().columns(0).visible(true);
//     }
//   }

//   useEffect(() => {
//     DataTable();
//     getScreanSize();

//     setOrgData(OrgData);

    

    
//   }, OrgData);


//   const addOrganization = (e) => {
//     e.preventDefault();
//     const data = {
//       name: name,
//       address: c_adress,
//       email: email,
//       contact_no: contact,
//       contact_person: contact_person,
//       description: description,

//     }
//     const url = endpoint + "organization/addOrg";
//     const header = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const addData = async () => {
//       axios.post(url, data, header)
//       // then and catch are used for handle the response
//       .then((response) => {
//         // console.log(response);
//         if (response.status === 200) {
//           notify("success", response.data.message)
//         } else {
//           notify("error", response.data.message)
//         }
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//         notify("error", error.response.data)
//       }
//       );
//     };
          
//     addData();
//     //RESET FORM
//     setName("");
//     setC_adress("");
//     setEmail("");
//     setContact("");
//     setContact_person("");
//     setDescription("");
//     // notify();
//     DataTable();
//     handleClose();

//   }

  




//   return (
//     <main id="main-body" className={sidebar === "true" ? window.innerWidth < 768 ?  "main-body-toggle":"": "main-body-toggle" } >
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />

//       <div className="body-title">
//         <div className="b-title-left">
//           <h2>Organization</h2>
//         </div>

//         <div className="b-title-right">
//           <ul className="short-bread">
//             <li>Home</li>
//             <li>
//               <span>Organization</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-title">
//           <div className="title-left">
//             <a
//               href="#"
//               className="btn btn-success"
//               onClick={handleShow}
//               data-bs-toggle="modal"
//               data-bs-target="#exampleModal"
//             >
//               <i className="mdi mdi-plus-circle me-2"></i> Add Customers
//             </a>
//           </div>
//           <div className="title-right">
//             <Dropdown>
//               <Dropdown.Toggle as={CustomToggle}>
//                 <i class="icon-options-vertical"></i>
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item
//                   id="print_id"
//                   onClick={() => {
//                     $("#orgData").DataTable().button(0).trigger();
//                   }}
//                 >
//                   Print
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   id="copy_id"
//                   onClick={() => {
//                     $("#orgData").DataTable().button(1).trigger();
//                   }}
//                 >
//                   Copy
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   id="csv_id"
//                   onClick={() => {
//                     $("#orgData").DataTable().button(2).trigger();
//                   }}
//                 >
//                   CSV
//                 </Dropdown.Item>
//                 <Dropdown.Item
//                   id="pdf_id"
//                   onClick={() => {
//                     $("#orgData").DataTable().button(3).trigger();
//                   }}
//                 >
//                   PDF
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </div>
//         </div>
//         <div className="card-body">
//           <table
//             id="orgData"
//             className="table table-striped border dt-responsive"
//             style={{ width: "100%" }}
//           >
//             <thead>
//               <tr>
//                 <th></th>
//                 <th>Name</th>
//                 <th>Address</th>
//                 <th>Contact</th>
//                 <th>Person</th>
//                 <th>Description</th>
//                 <th>Email</th>
//                 <th>Status</th>
//                 <th></th>
//               </tr>
//             </thead>
//           </table>
//         </div>
//       </div>

//       {/* modal */}

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Organization</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//             <Form.Label>Enter Name</Form.Label>
//               <Form.Control 
//                 type="name"
//                 placeholder="Enter Your Name"
//                 autoFocus
//                 value={name}
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setName(e.target.value);
//                 }
//                 }
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlInput2"
//             >
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="address"
//                 placeholder="Enter Address"
//                 autoFocus
//                 value={c_adress}
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setC_adress(e.target.value);
//                 }
//                 }
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlInput3"
//             >
//               <Form.Label>Contact Number</Form.Label>
//               <Form.Control
//                 type="contact-person"
//                 placeholder="Enter Contact Number"
//                 autoFocus
//                 value={contact}
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setContact(e.target.value);
//                 }
//                 }
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlInput4"
//             >
//               <Form.Label>Contact Person</Form.Label>
//               <Form.Control
//                 type="contact-person"
//                 placeholder="Enter Contact Person Name"
//                 autoFocus
//                 value={contact_person}
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setContact_person(e.target.value);
//                 }
//                 }
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlInput4"
//             >
//               <Form.Label>Email ID</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter Your Email ID"
//                 autoFocus
//                 value={email}
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setEmail(e.target.value);
//                 }
//                 }
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Description</Form.Label>
//               <Form.Control as="textarea" rows={3}
//               value={description}
//               onChange={(e) => {
//                 console.log(e.target.value);
//                 setDescription(e.target.value);
//               }
//               }
//               />
//             </Form.Group>
//           </Form>    

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="success" onClick={addOrganization}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>

//     </main>
//   );
// };

// export default Orgs;






{/* <a class="edit" id="editGroup" data-id="${data}" data-toggle="modal" data-target="#editGroupModal" onClick=${editGroup(data)}></a> */}