import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/fa'
import axios from 'axios'
import { SanityAssetDocument } from '@sanity/client'

import userAuthStore from '../store/authStore'
import { client } from '../utils/client'

const Upload = () => {
  const [isLoading, setIsloading] = useState(false)
  const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined>()
  const [wrongFileType, setWrongFileType] = useState()

  const uploadVideo =async (e:any) => {
    const selectedFile = e.target.files[0]
    const fileTypes = ['video/mp4', 'video/webm', 'video/ogg']

    if (fileTypes.includes(selectedFile.type)) {
        client.assets.upload('file', selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name
        })
        .then((data) => {
          setVideoAsset(data)
          setIsloading(false)
        })
    }else {
      setIsloading(false)
      setWrongFileType(true)
    }

  }

  return (
    <div>
      <div>
        <div>
          <div>
            <p>Upload Video</p>
            <p>Post a video to your account</p>
          </div>
          <div>
            {isLoading ? (
              <p>Uploading...</p>
            ): (
              <div>
                {videoAsset ? (
                  <div>
                    <video
                    src={videoAsset.url}
                    loop
                    controls
                    className='rounded-xl h[450px mt-16 bg-black'
                    >

                    </video>
                  </div>
                ) : (
                  <div>
                    <label >
                      <div>
                          <div>
                            <p>
                              <FaCloudDownloadAlt  className='textgray-300 text-6xl'/>
                            </p>
                            <p>
                              Upload video
                            </p>
                          </div>
                          <p>
                            MP4 or WebM or ogg <br />
                            720x1280 or higher <br />
                            Up to 10 minutes <br />
                            Less than 2GB
                          </p>
                          <p>
                            Select File
                          </p>
                      </div>
                      <input 
                      type="file"
                      name='upload-video' 
                      onChange={uploadVideo}
                      />
                    </label>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload