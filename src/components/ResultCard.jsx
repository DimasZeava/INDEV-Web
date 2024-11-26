import React from 'react';

const ResultCard = () => {
  const stats = [
    { value: '10+', label: 'Year Experience' },
    { value: '100+', label: 'Project' },
    { value: '10+', label: 'Collaborator' },
    { value: '25+', label: 'Client' },
  ];

  return (
    <section className="text-white py-8">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultCard;
