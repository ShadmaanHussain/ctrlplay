import React from 'react'
import { formatDate } from '@/lib/GameUtils';

interface ReleasedContainerProps {
  released: string | null;
}

export const ReleaseDate: React.FC<ReleasedContainerProps> = ({ released }) => {
  return (
    <p className="bg-primary text-background px-2 rounded-md uppercase">{released ? formatDate(released) : "TBA"}</p>
  )
}