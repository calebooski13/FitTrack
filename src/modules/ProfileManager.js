const remoteURL = "http://localhost:5002"

export default {

    getAllProfile() {
        return fetch(`${remoteURL}/profile`).then(result => result.json());
      },

post(newProfile) {
    return fetch(`${remoteURL}/profile`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProfile)
    }).then(data => data.json());
  },}