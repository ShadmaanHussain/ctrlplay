import React from 'react'

interface ReleasedContainerProps {
  released: string | null;
}

const formatDate = (dateString: string | null) => {
  if (!dateString) return "TBA";
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const ReleaseDate: React.FC<ReleasedContainerProps> = ({ released }) => {
  return (
    <p className="bg-primary text-background px-2 rounded-md uppercase">{formatDate(released)}</p>
  )
}

export default ReleaseDate