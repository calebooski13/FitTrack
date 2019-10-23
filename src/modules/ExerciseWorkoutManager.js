const remoteURL = "http://localhost:5002"


export default {
    post(newExerciseWorkout) {
        return fetch(`${remoteURL}/exerciseWorkouts`, {
            method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newExerciseWorkout)
        }).then(data => data.json());
      },

      getAllThemExercises() {
        return fetch(`${remoteURL}/exercises`).then(result => result.json());
      },

    }