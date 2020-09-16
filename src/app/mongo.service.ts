import { Injectable } from '@angular/core';
const mongoose=require('mongoose')
const express=require('express')
@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor() { }
  connect(){
    mongoose.connect('mongodb://localhost/medicalAdhaar',{
      useNewUrlParser:true,
      useCreateIndex:true,
      useUnifiedTopology:true
  });
  }

}
