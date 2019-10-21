const remoteURL = "http://localhost:5002";

// remote url as a base for future fetch calls
// get request to retrieve one user's information from the database
export default {
getOneUser(username) {
    return fetch(`${remoteURL}/users?username=${username}`)
    .then(result => result.json())
}

}