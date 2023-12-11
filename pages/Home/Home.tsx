import React, { useState, useEffect } from "react";
import { NativeWindStyleSheet } from "nativewind";
import Modules from "./Modules";
import Lessons from "./LessonList";
import lessonsMock from './fixtures/lessons.json';
import Exercises from "./ExerciseList";
import Exercise from "../Exercise/Exercise";
import traditionalContent from "../../content/propositional_logic";
import Theory from "./Theory";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  const [page, setPage] = useState<'Modules' | 'Lessons' | 'Exercises' | 'Exercise' | 'Theory'>('Modules');
  const [moduleId, setModuleId] = useState<string>('');
  const [lessonId, setLessonId] = useState<string>('');
  const [exerciseId, setExerciseId] = useState<string>('');
  const [exercises, setExercises] = useState<any>([]);
  const [exercise, setExercise] = useState<any>();
  const [lessons, setLessons] = useState<any[]>([]);
  const [theory, setTheory] = useState<any>({lessonId: '', content: {html: `<h1>Conteúdo Indisponível</h1>`}});

  useEffect(() => {
    const data = lessonsMock.filter(lesson => lesson.moduleId === moduleId);
    setLessons(data);
  }, [moduleId]);

  useEffect(() => {
    const data = lessonsMock.filter(lesson => lesson.id === lessonId);
    const theoryData = traditionalContent.filter(content => content.lessonId === lessonId)[0];
    setTheory(theoryData);
    setExercises(data[0]?.exercises || []);
  }, [lessonId]);

  useEffect(()=>{
    if(!exerciseId) return;
    let actualLesson = lessons.filter(lesson=> lesson.id === lessonId);
    let actualExercise = actualLesson[0].exercises.filter((exercise: { id: string; })=> exercise.id === exerciseId)[0];
    const alternatives = actualExercise.alternatives.map((alternative: { isCorrect: any; content: any; })=>{
      const {isCorrect, content } = alternative;
      return {
        isCorrect,
        title: content,
        isDisabled: false,
        onPress: ()=>{},
        background: '#e0dede'
      }
    }) || [];

    const statement = {
      title: actualExercise.title,
      description: actualExercise.description,
    };

    setExercise({alternatives, statement})
  }, [exerciseId]);

  function handleModulesOnClick(id: string = '') {
    setModuleId(id);
    setPage('Lessons');
  }

  function handleLessonsOnClick(id: string = '') {
    setLessonId(id);
    setPage('Exercises');
  }

  function handleExercisesOnClick(id: string = '') {
    setExerciseId(id);
    setPage('Exercise');
  }

  function handlePageChange(pageName: typeof page){
    setPage(pageName);
  }

  return (
    <>
      {page === 'Modules' ? <Modules onClick={handleModulesOnClick} /> : null}
      
      {page === 'Lessons' 
        ? <Lessons data={lessons} changePage={handlePageChange} onClick={handleLessonsOnClick}/> 
        : null
      }

      {page === 'Exercises' 
        ? <Exercises 
            data={exercises} 
            changePage={handlePageChange} 
            onClick={handleExercisesOnClick} 
          /> 
        : null
      }

      {page === 'Exercise' ? 
        <Exercise
          changePage={handlePageChange} 
          id={{exerciseId, lessonId}}
          alternatives={exercise?.alternatives || []}
          statement={{
            title: exercise?.statement.title || '', 
            description: exercise?.statement.description || ''
          }} 
        /> 
        : null
      }

      {page === 'Theory' ? <Theory source={theory.source} changePage={handlePageChange}/> : null}
    </>
  );
};

export default Home;
