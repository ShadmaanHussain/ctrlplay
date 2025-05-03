import React from 'react'

interface ReleasedContainerProps {
  released: string | null;
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

export const ReleaseDate: React.FC<ReleasedContainerProps> = ({ released }) => {
  return (
    <p className="bg-primary text-background px-2 rounded-md uppercase">{released ? formatDate(released) : "TBA"}</p>
  )
}