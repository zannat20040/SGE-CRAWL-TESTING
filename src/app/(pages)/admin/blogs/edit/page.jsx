import React from 'react';
import BlogEditor from '../../../../../_components/BlogEditor/BlogEditor.tsx'
import PrivateRoute from '../../../../../_components/shared/PrivateRoute/PrivateRoute.tsx';

const page = () => {
    return (
        <PrivateRoute>
            <div>
                <BlogEditor />
            </div>
        </PrivateRoute>
    );
};

export default page;