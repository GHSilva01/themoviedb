import axios from 'axios'

const apiFilmes = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'content-type':'application/json;charset=utf-8',
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTk0NmMzZjQxMWU1NmFiYjIxOTEzNTliMjI3NDYzNyIsInN1YiI6IjVmNjEzZmUxMWJmMjY2MDAzOWRiY2E1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PtfN5l5qlrsUJO9pB7CBhBiU2t6aSpU-fCrj4TQP5KY'
  }
})

export default apiFilmes