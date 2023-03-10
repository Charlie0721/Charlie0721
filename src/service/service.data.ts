import axios from "./axios"
import {IData} from '../interface/data.interface'

export class ServiceApp{

        static sendData=async (data:IData)=>axios.post('/',data)
}