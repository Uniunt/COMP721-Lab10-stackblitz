export class Course {
  course_id!: number;
  course_title!: string;
  semester!: string;
  period!: string;
  lecturer!: string;

  constructor(
    id: number,
    title: string,
    semester: string,
    period: string,
    lecturer: string
  ) {
    this.course_id = id;
    this.course_title = title;
    this.semester = semester;
    this.period = period;
    this.lecturer = lecturer;
  }
}
