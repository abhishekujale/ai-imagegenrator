import React, { useRef, useState } from 'react'
import "./Image.css"
import Dimage from "../assets/default_image.svg"
import { toPng } from 'html-to-image';
const Image = () => {
    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);
    let data_url;
    const imageGenrate = async () => {
        if (inputRef.current.value === "") {
            return 0;
        }
        // sk-proj-OJRe3qkIHlh2ROMHiU25T3BlbkFJ593gLUdLyYpFurtWRcBKs
        // sk-proj-OJRe3qkIHlh2ROMHiU25T3BlbkFJ593gLUdLyYpFurtWRcBKs
        const response = await fetch("https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer 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",
                    "User-Agent": "Chrome"
                },
                body: JSON.stringify({
                    prompt:` ${inputRef.current.value}`,
                    n: 1,
                    size: "512x512"
                }),
            }
        );
        let data = await response.json();
        let data_array = data.data;
        data_url = data_array[0].url;
    };

    const downloadImage = () => {
    const node = data_url.current;

    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'generated_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Failed to download image', error);
      });
  };
  return (
    <div className='ai-image-generator'>
          <div className="header">Ai image <span>generator</span></div>
          <div className="img-loading">
              <div className="image">
                  <img src={image_url==="/"?Dimage:image_url} alt="" />
              </div>
          </div>
          <div className="search-box">
              <input type="text" ref={inputRef} className="search-input" placeholder='DDDDDDDDD' />
              <div className="generate-btn">
                  <button onClick={()=>{imageGenrate()}}>Generate</button>
              </div>
              <div className="download-btn">
                  <button onClick={()=>{downloadImage()}}>Download</button>
              </div>
          </div>
    </div>
  )
}

export default Image

