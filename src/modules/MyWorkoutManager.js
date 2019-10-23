const remoteURL = "http://localhost:5002"

export default {
    getOneWorkout(id) {
        return fetch(`${remoteURL}/workouts?userId=${id}`).then(result => result.json())
 },

 getAll() {
    return fetch(`${remoteURL}/workouts`).then(result => result.json());
  },

// Delete a workout

  delete(id) {
    return fetch(`${remoteURL}/workouts/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },

 getAllExercises(id) {
    return fetch(`${remoteURL}/exerciseWorkouts?workoutId=${id}&_expand=exercise`).then(result => result.json());
  },

 getWithWorkouts(id){
    return fetch(`${remoteURL}/workouts/${id}?_expand=user&_embed=exerciseWorkouts`).then(result => result.json())
  },

  post(newWorkout) {
    return fetch(`${remoteURL}/workouts`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newWorkout)
    }).then(data => data.json());
  },

}