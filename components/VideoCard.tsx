import React from 'react'
import { Video } from '../types'
import { NextPage } from 'next'

interface IProps {
  post:Video
}

const VideoCart: NextPage<IProps> = ({ post }) => {
  return (
    <div>VideoCart</div>
  )
}

export default VideoCart