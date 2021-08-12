
// const axios = require(`axios`).default;
// const addUser = async () => {
//     const res = await axios
//     .post(`http://localhost:9999/userse`, {
//         name: "Jokha",
//         email: "jokhalhosni@gmail.com"
//     });
//     return res.data;
// }
// module.exports = {
//     creatUser: addUser()
// }
////////////////////////////////////////////////////////////////////
/// task
// const axios = require('axios').default;
// const addUser = async () => {
//     //for get we dont need res.data
//     const resp = await axios.get(`https://randomuser.me/api/`);
//     //for axios, unlike fetch, we use resp.data inestaed of
//     const user1 = await resp.data;
//     console.log(user1);
//     const res = await axios.post('http://localhost:9999/users', user1);
//     const user = await res.data;
//     return user;
//     //return await res.data.results[0];
// }
// //we cannot use any function after return
// module.exports = {
//     createUser: addUser()
// }

/////////////////////////////////////////////////////////////////


// https://randomuser.me/
// https://randomuser.me/api/ -> new user


const axios = require('axios').default;
async function getRandomUser() {
    const response = await axios.get('http://randomuser.me/api/?inc=gender,name,nat');
    return response.data.results[0];
}

async function addUserToJSON(user) {
    const response = await axios.post('http://localhost:9999/users', user);
    return response.data;
}

async function addUser() {
    const getUser = await getRandomUser();
    const userToJson = await addUserToJSON(getUser);
    return userToJson;
}
module.exports = {
    createUser: addUser()
}