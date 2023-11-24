import './YouTubeSearch.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

const YouTubeSearch = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState('')
    useEffect(() => {

    }, [])
    const handleSearchYouTube = async () => {
        let res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            "params": {
                part: 'snippet',
                maxResults: 20,
                key: 'AIzaSyBo7TSU1PQi3FkRvE-INjDuekB872KXGyM',
                q: query,
                type: 'video'
            }
        });
        if (res && res.data&& res.data.items) {
            let raw = res.data.items;
            let result = [];

            if (raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.chanelTitle;
                    object.description = item.snippet.description;

                    result.push(object);
                })
            }
            setVideos(result);
        }

    }
    return (
        <div className='youtube-container'>
            Hello youtube search
            <div>
                <input className='mt-3' type='text' value={query}
                    onChange={(event) => { setQuery(event.target.value) }}
                    placeholder='Search' />
                <button type='button' onClick={handleSearchYouTube}>Search</button>
            </div>
            {videos && videos.length > 0 &&
                videos.map(item => {
                    return <div className='yt-result' key = {item.id}>
                        <div className='left'>
                            <iframe className='yt-iframe' src={`https://www.youtube.com/embed/${item.id}`} title="정국 (Jung Kook) &#39;Standing Next to You&#39; Official MV" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='right'>
                            <div className='title'>
                                {item.title}
                            </div>
                            <div className='create-at'>
                                Create At: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                            </div>
                            <div className='author'>
                                Author: {item.author}
                            </div>
                            <div className='description'>
                                {item.description}
                            </div>
                        </div>

                    </div>
                })
            }



        </div>
    )
}

export default YouTubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "KG0OaN6Ss-8L69JYat9dN8Dk42M",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "ndWMjoRQP9XhYSfPmiX2xbuZcMQ",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "UNo0TG9LwwI"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-03T04:00:01Z",
//           "channelId": "UC3IZKseVpdzPSBaWxBxundA",
//           "title": "정국 (Jung Kook) &#39;Standing Next to You&#39; Official MV",
//           "description": "정국 (Jung Kook) 'Standing Next to You' Official MV 'GOLDEN' Release https://ingrv.es/JungKookGolden Credits: Director: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/UNo0TG9LwwI/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/UNo0TG9LwwI/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/UNo0TG9LwwI/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "HYBE LABELS",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-03T04:00:01Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "UolXE4M1hLJIBDeSyYNF2CO0Mx4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "6q0JnftlH-I"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-07T15:00:01Z",
//           "channelId": "UC3IZKseVpdzPSBaWxBxundA",
//           "title": "정국 (Jung Kook) &#39;Standing Next to You&#39; Official MV (Choreography ver.)",
//           "description": "정국 (Jung Kook) 'Standing Next to You' Official MV (Choreography ver.) 'GOLDEN' Release https://ingrv.es/JungKookGolden ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/6q0JnftlH-I/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/6q0JnftlH-I/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/6q0JnftlH-I/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "HYBE LABELS",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-07T15:00:01Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "vM1EHmWnjXf806bHqOUGL7tF5Ig",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "1ppY8E2wrWo"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-15T09:00:04Z",
//           "channelId": "UCLkAepWjdylmXSltofFvsYQ",
//           "title": "정국 (JungKook) &#39;Standing Next to You&#39; Lyric Video",
//           "description": "정국 #JungKook #StandingNextToYou #JungKook_GOLDEN Connect with BTS: https://ibighit.com/bts ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/1ppY8E2wrWo/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/1ppY8E2wrWo/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/1ppY8E2wrWo/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "BANGTANTV",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-15T09:00:04Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "A93_EtxhiEhLHSv0v_D2vMU9SGM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "M_EpTvMOnT0"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-11T09:59:58Z",
//           "channelId": "UCLkAepWjdylmXSltofFvsYQ",
//           "title": "[CHOREOGRAPHY] 정국 (Jung Kook) &#39;Standing Next to You&#39; Dance Practice",
//           "description": "Listen to \"GOLDEN\": https://ingrv.es/JungKookGolden Connect with BTS: https://ibighit.com/bts http://twitter.com/BTS_bighit ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/M_EpTvMOnT0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/M_EpTvMOnT0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/M_EpTvMOnT0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "BANGTANTV",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-11T09:59:58Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "HeeavlajfPJYTF48yoVldaUUC8k",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "6QzMbiPgYOg"
//         },
//         "snippet": {
//           "publishedAt": "2023-11-07T05:28:44Z",
//           "channelId": "UC8-Th83bH_thdKZDJCrn88g",
//           "title": "Jung Kook: Standing Next to You | The Tonight Show Starring Jimmy Fallon",
//           "description": "Musical guest Jung Kook performs \"Standing Next to You\" for The Tonight Show. The Tonight Show Starring Jimmy Fallon. Stream ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/6QzMbiPgYOg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/6QzMbiPgYOg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/6QzMbiPgYOg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "The Tonight Show Starring Jimmy Fallon",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-11-07T05:28:44Z"
//         }
//       }
//     ]
//   }
