import { Injectable } from '@angular/core';
import Entry from './models/entry';
import Exercise from './models/exercise';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private webService: WebService) { }

  getEntries(){
    return this.webService.get('entries');
  }

  createEntries(title: string) {
    return this.webService.post('entries', {title});
  }

  getExercise(entriesId: string){
    return this.webService.get(`entries/${entriesId}/exercise`);
  }

  createExercise(entriesId:string, title: string) {
    return this.webService.post(`entries/${entriesId}/exercise`, {title});
  }

  deleteEntries(entriesId: string){
    return this.webService.delete(`/entries/${entriesId}`);
  }

  deleteExercise(entriesId: string, exerciseId: string){
    return this.webService.delete(`/entries/${entriesId}/exercise/${exerciseId}`);
  }

  updateEntries(entriesId: string, entry: Entry){
    return this.webService.put(`/entries/${entriesId}`, {entry});
  }

  updateExercises(entriesId: string, exercise: Exercise){
    return this.webService.put(`/entries/${entriesId}/exercise/${exercise._id}`, {exercise});
  }
}
