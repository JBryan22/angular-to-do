import { Component } from '@angular/core';
import { Task } from './task.model';

//below is the annotation: determines how a component appears
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>

    <hr>
    <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()"></edit-task>
    <new-task (newTaskSender)="addTask($event)"></new-task>
  </div>
  `
})
//*ngFor = Angular's repeater directive

//below is the class def: defines how it behaves
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  //must be defined in the component class if template statement
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  addTask(newTaskFromChild: Task) {
   this.masterTaskList.push(newTaskFromChild);
  }
}
