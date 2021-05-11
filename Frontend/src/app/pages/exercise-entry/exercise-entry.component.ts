import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ExerciseService } from 'src/app/exercise.service';
import Entry  from '../../models/entry'
import Exercise  from '../../models/exercise'

@Component({
  selector: 'app-exercise-entry',
  templateUrl: './exercise-entry.component.html',
  styleUrls: ['./exercise-entry.component.scss']
})
export class ExerciseEntryComponent implements OnInit {
  entries: Entry[] = [];
  exercise: Exercise[] = [];
  entriesId: string = "";

  constructor(
    private exerciseService: ExerciseService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
  // Look into the .subscribe method. when we use httpclient from angular, we get results back as an observable
  //Observerable is a type in RxJS
  //allows us to use methods like subscribe to use with asynchronous data
  //subscribe allows us to instruct what code to use when the data is received. essentially like a callback function

  ngOnInit(): void {
    this.exerciseService
    .getEntries()
    .subscribe((entries: any) => this.entries = entries);

    this.route.params.subscribe((params: Params) => {
      this.entriesId = params.entriesId;
      if(!this.entriesId) return;
      this.exerciseService.getExercise(this.entriesId).subscribe((exercise: any) => this.exercise = exercise)
    })
  }

  deleteExercise(exercise: Exercise){
    console.log(this.entriesId);
    console.log(this.exercise);
    this.exerciseService.deleteExercise(this.entriesId, exercise._id)
    .subscribe((exercise: any) => {this.exercise = this.exercise.filter(e => e._id != exercise._id)})
  }
}
