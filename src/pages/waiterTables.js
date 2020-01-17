import React from 'react';
import { Link } from 'react-router-dom';

class WaiterTables extends React.Component {
    render() {
        return (
            <div>
                <Link to="/order" className="btn btn-success">Mesa 1</Link>
                <Link to="/order" className="btn btn-success">Mesa 2</Link>
                <Link to="/order" className="btn btn-success">Mesa 3</Link>
                <Link to="/order" className="btn btn-success">Mesa 4</Link>
                <Link to="/order" className="btn btn-success">Mesa 5</Link>
            </div>
        );
    };
};

export default WaiterTables;