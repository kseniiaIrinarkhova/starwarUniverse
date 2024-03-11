import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav'

export default function Root() {
    return (
        <>
            <Nav/>
            <div className="page">
                <Outlet />
            </div>
        </>
    );
}
