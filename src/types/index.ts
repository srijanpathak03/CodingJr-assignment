
export interface Lesson {
    title: string;
    duration: string;
    progress: number;
  }
  
  export interface CourseSection {
    title: string;
    isExpanded: boolean;
    lessons?: Lesson[];
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface CourseDetail {
    icon: React.ReactNode;
    label: string;
    value: string | number;
  }