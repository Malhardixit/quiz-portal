import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import QuizQuestions from './components/QuizQuestions/QuizQuestions';
import LandingPage from './pages/LandingPage';

function App() {
  const quizRoutes = [
    {
      name: '/',
      isEnabled: true,
      component: LandingPage,
    },
    {
      name: '*',
      isEnabled: true,
      component: <h1>Not Found</h1>,
    },
    {
      name: '/viewquestions',
      isEnabled: true,
      component: QuizQuestions,
    },
    {
      name: '/leaderboard',
      isEnabled: true,
      component: LeaderBoard,
    },
  ].filter((route) => route.isEnabled);

  return (
    <Routes>
      {quizRoutes.map((route) => (
        <Route
          key={route.name}
          path={route.name}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default App;
