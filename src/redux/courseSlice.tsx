import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Lesson = {
  title: string;
  duration: string;
  progress: number;
};

type CourseSection = {
  title: string;
  isExpanded: boolean;
  lessons?: Lesson[];
};

type CourseState = {
  sections: CourseSection[];
};

const initialState: CourseState = {
  sections: [
    { 
      title: 'Course Introduction', 
      isExpanded: true,
      lessons: [
        { title: 'Introduction', duration: '5:20', progress: 100 },
      ]
    },
    { 
      title: 'Basics of Blender 3D', 
      isExpanded: true,
      lessons: [
        { title: 'Absolute Basics', duration: '49:28', progress: 100 },
        { title: 'Object Editing', duration: '28:47', progress: 72 },
        { title: 'Modifiers', duration: '39:32', progress: 16 },
      ]
    },
    { title: 'Downloading Blender', isExpanded: false },
    { title: 'Settings and Preferences', isExpanded: false },
    { title: 'Blender Interface', isExpanded: false },
    { title: 'Mesh Modeling', isExpanded: false },
    { title: 'Mesh Editing Operations', isExpanded: false },
    { title: 'Most Common Modifiers', isExpanded: false },
    { title: 'Orthographic References', isExpanded: false },
    { title: 'Sculpting', isExpanded: false },
  ]
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    toggleSection: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.sections[index].isExpanded = !state.sections[index].isExpanded;
    }
  }
});

export const { toggleSection } = courseSlice.actions;
export default courseSlice.reducer;
