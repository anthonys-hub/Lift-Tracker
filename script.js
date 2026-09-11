
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
    document.getElementById('list').innerHTML = '';
    const targetDiv = document.getElementById('list')


    for (const exercise of exercises) {
        const h1 = document.createElement('h1')
        h1.textContent = `${exercise.name} - ${exercise.day} Day  - ${exercise.muscleGroup} - Sets: ${exercise.sets} - Reps: ${exercise.reps}`
        targetDiv.append(h1)
        h1.classList.add('text-white', 'font-bold', 'p-5');
    }


}

function pushDay() {
    document.getElementById('list').innerHTML = '';
    const push = exercises.filter(exercise => exercise.day === 'Push')
    const targetDiv = document.getElementById('list')


    for (const exercise of push) {
        const h1 = document.createElement('h1')
        h1.textContent = `${exercise.name} Sets: ${exercise.sets} Reps: ${exercise.reps}`
        targetDiv.append(h1)
        h1.classList.add('text-white', 'font-bold', 'p-5');


    }

}

function pullDay() {
    document.getElementById('list').innerHTML = '';
    const pull = exercises.filter(exercise => exercise.day === 'Pull')
    const targetDiv = document.getElementById('list')

    for (const exercise of pull) {
        const h1 = document.createElement('h1')
        h1.textContent = `${exercise.name} Sets: ${exercise.sets} Reps: ${exercise.reps}`
        targetDiv.append(h1)
        h1.classList.add('text-white', 'font-bold', 'p-5');

    }

}

function legDay() {
    document.getElementById('list').innerHTML = '';
    const leg = exercises.filter(exercise => exercise.day === 'Leg Day')
    const targetDiv = document.getElementById('list')

    for (const exercise of leg) {
        const h1 = document.createElement('h1')
        h1.textContent = `${exercise.name} Sets: ${exercise.sets} Reps: ${exercise.reps}`
        targetDiv.append(h1)
        h1.classList.add('text-white', 'font-bold', 'p-5');

    }

}


function cardio() {
    document.getElementById('list').innerHTML = '';
    const targetDiv = document.getElementById('list')

    const cardio = exercises.filter(exercise => exercise.day === 'Cardio Day')

    for (const exercise of cardio) {
        const h1 = document.createElement('h1')
        h1.textContent = `${exercise.name}`
        targetDiv.append(h1)
        h1.classList.add('text-white', 'font-bold', 'p-5');

    }

}


function upperDay() {
    document.getElementById('list').innerHTML = '';
    const push = exercises.filter(exercise => exercise.day === 'Push')
    const pull = exercises.filter(exercise => exercise.day === 'Pull')
    const targetDiv = document.getElementById('list')


    for (const exercise of push.concat(pull)) {
        const h1 = document.createElement('h1')
        h1.textContent = `${exercise.name} Sets: ${exercise.sets} Reps: ${exercise.reps}`
        targetDiv.append(h1)
        h1.classList.add('text-white', 'font-bold', 'p-5');
    }

}

function restDay() {
    document.getElementById('list').innerHTML = '';
    const targetDiv = document.getElementById('list')


    const h1 = document.createElement('h1')



    targetDiv.append(h1)

    h1.textContent = 'Rest up!'
    h1.classList.add('text-white', 'font-bold', 'p-5');




}