import React, { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import DashboardLayout from "../layout/Dashboard/DashboardLayout";
import Home from "../pages/Dashboard/Home/Home";
import Send from "../pages/Dashboard/Send/Send";





const dashRoutes: RouteObject[] = [
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "send",
				element: <Send />,
			},
		],
	},
];

export default dashRoutes;
