import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage, SearchPage, ErrorPage } from '../pages';
import { Layout } from '@components/layout';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
