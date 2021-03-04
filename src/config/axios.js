import axios from 'axios'

const intance = axios.create({
  baseURL: 'http://ctb2.promaniak.com/api'
})

export default intance