import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import './DashboardHome.css'; // Import CSS for styling

const DashboardHome = () => {
    const [charts, setCharts] = useState([]);

    useEffect(() => {
        fetch('https://stride1-pet-shop-server.vercel.app/pets')
            .then(res => res.json())
            .then(data => {
                setCharts(data);
            });
    }, []);

    return (
        <div className="dashboard-container "> {/* Apply background color and animation to this container */}
            <h1 className='text-center italic  decoration-red-500  font-bold text-2xl text-red-600'>..........DashBoard Overview..........</h1>

            <ResponsiveContainer width="100%" className='mt-20' aspect={3}>
                <LineChart data={charts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" animationDuration={1000} /> {/* Add animationDuration prop for animation */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardHome;
