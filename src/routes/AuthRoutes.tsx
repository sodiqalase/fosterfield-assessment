import React, { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/Auth/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Signup from "../pages/Auth/signup/Signup";

const authRoutes: RouteObject[] = [
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{ index: true, element: <Login /> },
			{
				path: "signup",
				element: <Signup />,
			},
		],
	},
];

export default authRoutes;
