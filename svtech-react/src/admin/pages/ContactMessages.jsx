import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function ContactMessages() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);


  const getMessages = async () => {
    try {
    const response = await axios.get(
  "/api/contacts"
);
      

      setMessages(response.data);

    } catch (error) {
      console.log(error);
    }
  };


  const deleteMessage = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this message?"
    );

    if (!confirmDelete) return;


    try {

     await axios.delete(
  `/api/contacts/${id}`
);

      getMessages();

    } catch (error) {
      console.log(error);
    }
  };


  return (

    <div className="dashboard">

      <Sidebar />


      <div className="dashboard-content">

        <h1>Contact Messages</h1>


        <table className="applicant-table">

          <thead>

            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>

          </thead>


          <tbody>

          {
            messages.length > 0 ?

            messages.map((item)=>(

              <tr key={item._id}>

                <td>
                  {item.firstName} {item.lastName}
                </td>

                <td>
                  {item.email}
                </td>

                <td>
                  {item.phone}
                </td>

                <td>
                  {item.company}
                </td>

                <td>
                  {item.subject}
                </td>

                <td>
                  {item.message}
                </td>


                <td>

                  <button
                    className="delete-btn"
                    onClick={() => deleteMessage(item._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

            :

            <tr>
              <td colSpan="7">
                No Messages Found
              </td>
            </tr>

          }

          </tbody>


        </table>


      </div>


    </div>

  );
}


export default ContactMessages;