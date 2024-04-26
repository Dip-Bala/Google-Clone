import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Results } from './Results';

export const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/videos" element={<Results />} />
        <Route path="/news" element={<Results />} />
      </Routes>
    </div>
  );
};
