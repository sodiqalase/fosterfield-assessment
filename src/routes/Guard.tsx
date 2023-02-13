import React, { Suspense } from "react";

import { Navigate } from "react-router-dom";
import { hasToken } from "../utils/helpers";

const Guard = ({
	permission,
	children,
}: {
	permission: "public" | "private";
	children: React.ReactNode;
}) => {
	return (
		<>
			{permission === "public" ? (
				hasToken() ? (
					<Navigate to="/dashboard" />
				) : (
					children
				)
			) : hasToken() ? (
				children
			) : (
				<Navigate to="/" />
			)}
		</>
	);
};

export default Guard;
