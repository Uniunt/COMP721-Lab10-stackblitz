import { Course } from '../courses';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})

@Input() course: Course;

export class CourseDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
