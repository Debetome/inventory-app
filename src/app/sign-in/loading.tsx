import React, { FC } from 'react'

import LoadingCircle from '@/app/components/LoadingCircle'

const Loading: FC = () => {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{ height: '90vh' }}
    >
      <LoadingCircle />
    </div>
  )
}

export default Loading
