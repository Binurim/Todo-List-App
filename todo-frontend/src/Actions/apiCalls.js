import axios from 'axios';
import {TODOLIST} from '../constants/url';


const USER = 'binuri'
const PASSWORD = 'binuri'


//get all todos
export const getToDoList = () => {
    return axios
        .get(TODOLIST.GET_ALL, { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } } )
        
        .then(res => {
            return res.data;
        })
        .catch(function (error) {
            //handle error 
            console.log(error);
        })
        .finally(function (error) {
            console.log(error);
        })
}

//post a todo
export const postTodo = ({item}) => {
    return axios
        .post(TODOLIST.POST_TODO, item,  { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } })
        .then(res => {
            console.log(res.data);
        })
        .catch(function (error) {
            //handle error 
            console.log(error);
        })
        .finally(function (error) {
            console.log(error);
        })

}


//delete todo
export const deleteTodo = (id) => {
    return axios
        .delete(TODOLIST.GET_ALL+ id , { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } } )
        .then(res => {
            console.log(res.data);
        })
        .catch(function (error) {
            //handle error 
            console.log(error);
        })
        .finally(function (error) {
            console.log(error);
        })

}

