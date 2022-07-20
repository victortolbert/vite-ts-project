import axios from 'axios'
import {Model} from 'vue-api-query'

// inject global axios instance as http client to Model
Model.$http = axios
