import axios from "axios";

const API_URL = "https://server-ylzu.onrender.com";

export const api = {
  // User endpoints
  async getUsers() {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 500) {
        throw new Error(
          error.response.data.message || "Failed to fetch users"
        );
      }
      throw error;
    }
  },

  async createUser(user) {
    try {
      const response = await axios.post(`${API_URL}/users`, user);
      console.log("res", response);
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        throw new Error(
          error.response.data.message || "Failed to create user"
        );
      }
      throw error;
    }
  },

  async updateUser(id, user) {
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, user);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("User not found");
      }
      if (error.response?.status === 400) {
        throw new Error(
          error.response.data.message || "Failed to update user"
        );
      }
      throw error;
    }
  },

  async deleteUser(id) {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("User not found");
      }
      if (error.response?.status === 500) {
        throw new Error(
          error.response.data.message || "Failed to delete user"
        );
      }
      throw error;
    }
  },

  // Role endpoints
  async getRoles() {
    try {
      const response = await axios.get(`${API_URL}/roles`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 500) {
        throw new Error(
          error.response.data.message || "Failed to fetch roles"
        );
      }
      throw error;
    }
  },

  async updateRole(id, role) {
    try {
      const response = await axios.put(`${API_URL}/roles/${id}`, role);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Role not found");
      }
      if (error.response?.status === 400) {
        throw new Error(
          error.response.data.message || "Failed to update role"
        );
      }
      throw error;
    }
  },

  async createRole(role) {
    try {
      const response = await axios.post(`${API_URL}/roles`, role);
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        throw new Error(
          error.response.data.message || "Failed to create role"
        );
      }
      throw error;
    }
  },

  async deleteRole(id) {
    try {
      await axios.delete(`${API_URL}/roles/${id}`);
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error("Role not found");
      }
      if (error.response?.status === 500) {
        throw new Error(
          error.response.data.message || "Failed to delete role"
        );
      }
      throw error;
    }
  },
};
