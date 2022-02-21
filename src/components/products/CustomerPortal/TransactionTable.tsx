import React from 'react';
import { ProductListTableRow } from '../StaffPortal/ProductListTableRow';
import TransactionTableRow from './TransactionTableRow';

export default function TransactionTable() {
    return (
        <div className="p-8 rounded-md w-full ">
            <div>
                <div className=" flex items-center justify-between pb-6 ">
                    <div>
                        <h2 className="text-sky-700 text-4xl font-semibold pl-40">Transaction History</h2>
                    </div>
                </div>
            </div>

            <div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto m-1">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden pr-28 pl-28 pb-20">
                        <table className="min-w-full leading-normal shadow-lg shadow-sky-700 ">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">User ID</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">Outlet ID</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">Created Date</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xl font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody>{/* <TransactionTableRow/>; */}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
