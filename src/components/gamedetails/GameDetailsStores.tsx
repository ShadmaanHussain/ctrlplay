import React from 'react'
import { Button } from '../ui/button'
import { GameStores } from '@/types/GameTypes';

interface GameDetailsStoresProps {
  stores: GameStores[];
}

const GameDetailsStores: React.FC<GameDetailsStoresProps> = ({ stores }) => {
  return (
    <>
    <h3 className="text-lg font-light mb-4">Where to buy</h3>
    <div className='grid grid-cols-2 gap-4'>
      {stores.map((store) => <Button variant="secondary" className="py-6">{store.store.name}</Button>)}
    </div>
    </>
  )
}

export default GameDetailsStores