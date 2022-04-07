import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constructor } from 'jasmine';
import { Goal } from '../../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.scss']
})
export class GoalDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);

  constructor() ;{ };

  this.ngOnInit(); void {
  };

}}
