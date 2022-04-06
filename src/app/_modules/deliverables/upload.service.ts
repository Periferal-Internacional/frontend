import { Injectable } from "@angular/core";
import { Upload } from "./upload";
import {AngularFireDatabase, FirebaseListObservable, FirebasObjectObservable } from '@angular/fire'
import * as firebase from 'firebase';

@Injectable()
export class UploadService {
    constructor(private db: AngularFireDatabase) { }
    
    pushUpload(upload: Upload) {
        let storageRef = firebase.storage().ref();
    }
}