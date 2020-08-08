import axios from "axios";

async function getUser() {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=200&nat=u');
      console.log(response);
      return response
    } catch (error) {
      console.error(error);
    }
  }

  export default getUser;
