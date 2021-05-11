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

  getExercise(listId: string){
    return this.webService.get(`entries/${listId}/exercise`);
  }

  createExercise(listId:string, title: string) {
    return this.webService.post(`entries/${listId}/exercise`, {title});
  }

  deleteEntries(listId: string){
    return this.webService.delete(`/lists/${listId}`);
  }

  deleteExercise(listId: string, exerciseId: string){
    return this.webService.delete(`/lists/${listId}/exercise/${exerciseId}`);
  }

  updateEntries(listId: string, entry: Entry){
    return this.webService.put(`/lists/${listId}`, {entry});
  }

  updateExercises(listId: string, exercise: Exercise){
    return this.webService.put(`/lists/${listId}/exercise/${exercise._id}`, {exercise});
  }
}
