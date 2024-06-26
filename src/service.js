import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:5091/';
export default {
  getTasks: async () => {
    const result = await axios.get(``)    
    return result.data;
  },

  addTask: async(name)=>{
    await axios.post(`${name}`)

    return {};
  },

  setCompleted: async(id, isComplete)=>{
    await axios.put(`${id}/${isComplete}`)
    return {};
  },

  deleteTask:async(id)=>{
    await axios.delete(`${id}`)
  }
};
