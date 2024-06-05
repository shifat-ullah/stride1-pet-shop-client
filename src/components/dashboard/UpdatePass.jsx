import { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.config';
// Import the CSS file for custom animations

export const UpdatePass = () => {
    const [password, setPassword] = useState('');
    const [updatePassword, updating, error] = useUpdatePassword(auth);

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-500">
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (updating) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="animate-pulse text-gray-500">Updating...</p>
            </div>
        );
    }
    return (
        <div className="text-black flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl mb-4 text-center">Update Password</h2>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
                        placeholder="New Password"
                    />
                </div>
                <button
                    type="button"
                    onClick={async () => {
                        const success = await updatePassword(password);
                        if (success) {
                            alert('Updated password');
                        }
                    }}
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};
