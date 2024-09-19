import { createSlice } from '@reduxjs/toolkit';
import { FAQ } from '../../types';

const initialState: FAQ[] = [
  { 
    question: 'How long does it take to learn?', 
    answer: 'The learning curve varies, but with dedication, you can grasp the basics in a few weeks.' 
  },
  { 
    question: 'How much does Blender cost?', 
    answer: 'Blender is completely free and open-source software.' 
  },
  { 
    question: 'Is this course suitable for beginners?', 
    answer: 'Yes, this course is designed for beginners and covers all the fundamentals of Blender 3D.' 
  },
  { 
    question: 'Do I need a powerful computer to follow along?', 
    answer: "While a decent computer helps, Blender can run on most modern systems. We'll cover optimizing your setup in the course." 
  },
  { 
    question: 'Will I be able to create my own 3D models after this course?', 
    answer: "Absolutely! By the end of this course, you'll have the skills to create your own 3D models and scenes."
  },
];

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {},
});

export default faqSlice.reducer;