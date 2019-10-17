const remoteURL = "http://localhost:5002"

export default {
    get_workouts(user_id) {
        return fetch(`${remoteURL}/workouts?userId=${user_id}`).then(result => result.json())
 },

  post(newWorkout) {
    return fetch(`${remoteURL}/workouts`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newWorkout)
    }).then(data => data.json());
  },}