import axios from 'axios';
import {createAsyncThunk  } from '@reduxjs/toolkit';


export const getClientBynameAndBday = createAsyncThunk(
    'client/getClientBynameAndBday',
    async(data)=>{
      
        const year = data.birthday.getFullYear();
        const month = data.birthday.getMonth() + 1;
        let day =data.birthday.getDate();

        if (day.toString().length<2){
            day ='0'+day
        }
       const dateFormated = year + '-' + month + '-' + day; 
       console.log(dateFormated)

        const response = await axios.post('http://localhost:8080/patient/serachByNameBirthday',{
            name: data.name, birthday:dateFormated});
        return response
    }
)

export const getClientByMemberNumber = createAsyncThunk(
    'client/getClientByMemberNumber',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/patient/serachByMemberNumber',{memberNumber:data});
        return response
    }
)

export const addNewClient =  createAsyncThunk(
    'client/addNewClient',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/patient/newPatient',data);
        return response
    }
)

export const updateClient =  createAsyncThunk(
    'client/updateClient',
    async(data)=>{
        const response = await axios.put('http://localhost:8080/patient/updatePatient',data);
        return response
    }
)


