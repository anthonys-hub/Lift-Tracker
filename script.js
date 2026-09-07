
const exercises = [
    { name: "Incline Chest Press", day: "Push", muscleGroup: "Chest", sets: "3", reps: "5-9" },
    { name: "Shoudler Press", day: "Push", muscleGroup: "Chest", sets: "3", reps: "5-9" },
    { name: "Pec Dec", day: "Push", muscleGroup: "Chest", sets: "3", reps: "5-9" },
    { name: "Lateral Raise", day: "Push", muscleGroup: "Chest", sets: "3", reps: "5-9" },
    { name: "Straight Bar Tricep Pushdown", day: "Push", muscleGroup: "Chest", sets: "3", reps: "5-9" },
    { name: "Lateral Puldown", day: "Pull", muscleGroup: "Lats", sets: "3", reps: "5-9" },
    { name: "Bicep Curl machine", day: "Pull", muscleGroup: "Biceps", sets: "3", reps: "5-9" },
    { name: "Upper Back Row", day: "Pull", muscleGroup: "Back", sets: "3", reps: "5-9" },
    { name: "Rope Hammer Curl", day: "Pull", muscleGroup: "Forearms", sets: "3", reps: "5-9" },
    { name: "Leg Extensions", day: "Leg Day", muscleGroup: "Quads", sets: "3", reps: "5-9" },
    { name: "Calf Raises", day: "Leg Day", muscleGroup: "Calves", sets: "3", reps: "5-9" },
    { name: "Hamstring Cruls", day: "Leg Day", muscleGroup: "Hamstrings", sets: "3", reps: "5-9" },
    { name: "Leg Press", day: "Leg Day", muscleGroup: "Quads", sets: "3", reps: "5-9" },
    { name: "Hip Abductors", day: "Leg Day", muscleGroup: "Hips", sets: "3", reps: "5-9" },
    { name: "Hip Adductors", day: "Leg Day", muscleGroup: "Hips", sets: "3", reps: "5-9" },
    { name: "Ab Crunch Machine", day: "Leg Day", muscleGroup: "Abs", sets: "3", reps: "5-9" },
    { name: "Eliptical", day: "Cardio Day", muscleGroup: "Cardio", time: "1 hour" },


]

function allExercises() {

    for (exercise of exercises) {
        const body = document.body
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        body.append(div)
        body.append(h1)
        h1.append(exercise.name + exercise.day + exercise.muscleGroup + exercise.sets + exercise.reps)
    }


}

function pushDay() {
    const push = exercises.filter(exercise => exercise.day === 'Push')

    for (exercise of push) {
        const body = document.body
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        body.append(div)
        body.append(h1)
        h1.append(exercise.name)

    }

}

function pullDay() {
    const pull = exercises.filter(exercise => exercise.day === 'Pull')

    for (exercise of pull) {
        const body = document.body
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        body.append(div)
        body.append(h1)
        h1.append(exercise.name)

    }

}

function legDay() {
    const leg = exercises.filter(exercise => exercise.day === 'Leg Day')

    for (exercise of leg) {
        const body = document.body
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        body.append(div)
        body.append(h1)
        h1.append(exercise.name)

    }

}


function cardio() {
    const cardio = exercises.filter(exercise => exercise.day === 'Cardio Day')

    for (exercise of cardio) {
        const body = document.body
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        body.append(div)
        body.append(h1)
        h1.append(exercise.name)

    }

}


function upperDay() {
    const push = exercises.filter(exercise => exercise.day === 'Push')
    const pull = exercises.filter(exercise => exercise.day === 'Pull')


    for (exercise of push.concat(pull)) {
        const body = document.body
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        body.append(div)
        body.append(h1)
        h1.append(exercise.name)

    }

}

function restDay() {
    const body = document.body
    const div = document.createElement('div')
    const h1 = document.createElement('h1')


    body.append(div)
    body.append(h1)

    h1.textContent = 'Rest up!'



}