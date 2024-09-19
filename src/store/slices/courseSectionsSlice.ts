import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseSection } from '../../types';

const initialState: CourseSection[] = [
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
];

const courseSectionsSlice = createSlice({
  name: 'courseSections',
  initialState,
  reducers: {
    toggleSection: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state[index].isExpanded = !state[index].isExpanded;
    },
  },
});

export const { toggleSection } = courseSectionsSlice.actions;
export default courseSectionsSlice.reducer;