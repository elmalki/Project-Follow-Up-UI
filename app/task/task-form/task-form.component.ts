import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TaskService} from './../task.service';
import {TaskModel} from './../task.model';
@Component({
    selector: 'task-form',
    templateUrl: 'app/task/task-form/task-form.component.html',
     providers: [TaskService],
})

export class TaskFormComponent implements OnInit {
    taskModel:TaskModel= new TaskModel();
 
     constructor(private taskService:TaskService, private routeParams: RouteParams ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        console.log(projectId) ;
     }
      
}