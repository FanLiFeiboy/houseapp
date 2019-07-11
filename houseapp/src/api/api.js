
import axios from 'axios'
import qs from 'qs'

const IP='http://192.168.43.106:80'

export function setPwd(acc,pwd){
    return axios.post(IP+'/login.php',qs.stringify({acc,pwd}))
}


export function gethouse(){
    return axios.get(IP+'/gethouselist.php')
}