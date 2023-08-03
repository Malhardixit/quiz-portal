import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
// import { PresentationControls, Stage, useGLTF } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import Navbar from '../newNavbar/Navbar';
import Styles from './QuizQuestions.module.css';
import ThreeDQuiz from './ThreeDQuizView';

// function Model(props) {
//   const { scene } = useGLTF('src/public/model.gltf');
//   // eslint-disable-next-line react/no-unknown-property
//   return <primitive object={scene} scale={0.01} {...props} />;
// }

function QuizQuestions() {
  const { state } = useLocation();
  const data = state;
  console.log(data);
  const questions = [1, 2, 3, 4, 5];
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null),
  );
  const handleSelectedOption = (questionIndex, optionId) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      if (updatedSelectedOptions[questionIndex] === optionId) {
        updatedSelectedOptions[questionIndex] = null;
      } else {
        updatedSelectedOptions[questionIndex] = optionId;
      }
      return updatedSelectedOptions;
    });
  };
  const quizTitle = 'Astronomy and space Quiz';
  const getAlphabetLetter = (id) => String.fromCharCode(65 + id);

  return (
    <div>
      <Navbar userName="Anish P" coins={300} />
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <SideBar />
        <div style={{ marginLeft: '20rem', flexBasis: '95%', margin: 'auto' }}>
          <div className={Styles.QuizQuestionsWrapper}>
            <div className={Styles.QuizQuestionsTitleDiv}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={Styles.QuizQuestionsTitle}>{quizTitle}</div>
                <IconButton>
                  <InfoOutlinedIcon sx={{ fontSize: '3rem', color: 'white' }} />
                </IconButton>
              </div>
              <div className={Styles.QuizQuestionsSubtitle}>
                <div className={Styles.QuizQuestionsSubtitleInnerDiv}>
                  <span style={{ margin: 'auto', fontWeight: '600' }}>15</span>
                  <span>Questions</span>
                </div>
                <div className={Styles.QuizQuestionsSubtitleInnerDiv}>
                  <span style={{ margin: 'auto', fontWeight: '600' }}>30</span>
                  <span>Minutes</span>
                </div>
              </div>
            </div>

            {/* <div>
              <Canvas
                dpr={[1, 2]}
                shadows
                camera={{ fov: 45 }}
                style={{ position: 'absolute' }}
              >
                <color attach="background" args={['#101010']} />
                <PresentationControls
                  speed={1.5}
                  global
                  zoom={0.5}
                  // polar={[-0.1, Math.PI / 4]}
                >
                  <Stage>
                    <Model scale={0.01} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            </div> */}

            <div className={Styles.QuizQuestion3DView}>
              <ThreeDQuiz />
            </div>

            {/* Quiz Questions Body */}
            {data.questionSets.map((questionNumber) => (
              <div key={questionNumber} className={Styles.QuizQuestionsBody}>
                <div className={Styles.QuizQuestionsBodyInnerDiv}>
                  <div className={Styles.QuizQuestionsBodyInnerDivTitle}>
                    <span className={Styles.QuizQuestionsNumber}>
                      {questionNumber.questionId}
                    </span>
                    <span className={Styles.QuizOptionsTitle}>
                      {questionNumber.questionText}
                    </span>

                    {/* 3D view of the quiz */}

                    <div className={Styles.QuizOptionsWrapper}>
                      {questionNumber.questionOptions.map((item) => (
                        <button
                          // eslint-disable-next-line max-len
                          onClick={() => handleSelectedOption(
                            questionNumber.questionId,
                            item.optionId,
                          )}
                          type="button"
                          className={
                            selectedOptions[questionNumber.questionId]
                            === item.optionId
                              ? Styles.QuizOptionsSelected
                              : Styles.QuizOptions
                          }
                        >
                          <span>{getAlphabetLetter(item.optionId - 1)}</span>
                          <span className={Styles.QuizOptionsList}>
                            {item.optionDesc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestions;
