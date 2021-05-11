import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseEntryComponent } from './pages/exercise-entry/exercise-entry.component';

const routes: Routes = [
{ path: '', component: ExerciseEntryComponent},
{ path: 'entries/:entriesId', component: ExerciseEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
