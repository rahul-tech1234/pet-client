import React from "react";

const State = ({ stats }) => {
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Total */}
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-4xl">🐾</span>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                            Total
                        </span>
                    </div>

                    <h2 className="mt-6 text-4xl font-bold">{stats?.total}</h2>
                    <p className="mt-1 text-gray-500">
                        Total Adoption Requests
                    </p>
                </div>

                {/* Pending */}
                <div className="rounded-2xl border bg-amber-50 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-4xl">⏳</span>
                        <span className="rounded-full bg-amber-200 px-3 py-1 text-sm font-medium text-amber-800">
                            Pending
                        </span>
                    </div>

                    <h2 className="mt-6 text-4xl font-bold text-amber-700">
                        {stats?.pending}
                    </h2>
                    <p className="mt-1 text-amber-600">Waiting for Review</p>
                </div>

                {/* Accepted */}
                <div className="rounded-2xl border bg-green-50 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-4xl">✅</span>
                        <span className="rounded-full bg-green-200 px-3 py-1 text-sm font-medium text-green-800">
                            Accepted
                        </span>
                    </div>

                    <h2 className="mt-6 text-4xl font-bold text-green-700">
                        {stats?.accepted}
                    </h2>
                    <p className="mt-1 text-green-600">Successfully Approved</p>
                </div>

                {/* Rejected */}
                <div className="rounded-2xl border bg-red-50 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-4xl">❌</span>
                        <span className="rounded-full bg-red-200 px-3 py-1 text-sm font-medium text-red-800">
                            Rejected
                        </span>
                    </div>

                    <h2 className="mt-6 text-4xl font-bold text-red-700">
                        {stats?.rejected}
                    </h2>
                    <p className="mt-1 text-red-600">Declined Requests</p>
                </div>
            </div>
            ;
        </div>
    );
};

export default State;
