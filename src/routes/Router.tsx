import React, { Suspense } from 'react';
import { useRoutes, Routes, Route } from 'react-router-dom';


import authRoutes from "./AuthRoutes";
import dashRoutes from "./DashboardRoutes";
import Guard from "./Guard";

const AppRouter = () => {
    const authConfig = useRoutes(authRoutes);
    const dashboardConfig = useRoutes(dashRoutes);

    return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route
					path="/*"
					element={
						<Guard permission="public">
							<>{authConfig}</>
						</Guard>
					}
				></Route>
				<Route
					path="/dashboard/*"
					element={
						<Guard permission="private">
							<>{dashboardConfig}</>
						</Guard>
					}
				></Route>
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
