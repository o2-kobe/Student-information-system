export interface Student {
  studentID: number;
  studentName: string;
  departmentID: number;
}

export interface Department {
  departmentID: number;
  departmentHead: string;
  departmentName: string;
}

export interface Course {
  courseID: number;
  courseName: string;
}

export interface Registration {
  studentID: number;
  courseID: number;
  grade: string;
}

export interface Teacher {
  teacherId: number;
  name: string;
  staffId: number;
  course: string;
}

export type TableData = Student | Department | Course | Registration;
