import axios from "axios";

const getUsers = () => axios({ method: "GET", url: "https://jsonplaceholder.typicode.com/users" });

export default getUsers;