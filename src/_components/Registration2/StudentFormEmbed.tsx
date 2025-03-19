import React from 'react';

const StudentFormEmbed = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://shabuj-global-reg.web.app/studentForm"
        width="100%"
        className='min-h-screen  '
        style={{ border: 'none' }}
        title="Student Form"
      ></iframe>
    </div>
  );
};

export default StudentFormEmbed;
