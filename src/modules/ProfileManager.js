const remoteURL = "http://localhost:5002"

export default {

    getOneProfile(id) {
        return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
 },

    getAllProfile() {
        return fetch(`${remoteURL}/users`).then(result => result.json());
      },

post(newProfile) {
    return fetch(`${remoteURL}/users`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProfile)
    }).then(data => data.json());
  },

  update(editedProfile) {
    return fetch(`${remoteURL}/users/${editedProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProfile)
    }).then(data => data.json());
  }
};

