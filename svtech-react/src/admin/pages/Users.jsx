import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../css/Users.css";
function Users() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "HR",
    status: "Active",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  // Fetch Users
  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update User
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(
          `/api/users/${editId}`,
          form
        );
      } else {
        await axios.post(
          "/api/users",
          form
        );
      }

      setForm({
        name: "",
        email: "",
        password: "",
        role: "HR",
        status: "Active",
      });

      setEditId(null);

      getUsers();

    } catch (error) {
      console.error(error);
      alert("Error saving user");
    }
  };

  // Edit User
  const handleEdit = (user) => {
    setEditId(user._id);

    setForm({
      name: user.name,
      email: user.email,
      password: "",
      role: user.role,
      status: user.status,
    });
  };

  // Delete User
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await axios.delete(`/api/users/${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-content">

        <h2>User Management</h2>

        <form className="user-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required={!editId}
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="Recruiter">Recruiter</option>
          </select>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button type="submit">
            {editId ? "Update User" : "Add User"}
          </button>

        </form>

        <table className="users-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user._id}>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Users;