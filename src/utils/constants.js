import { YOUTUBE_API_KEY } from "./keys";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=" +
  YOUTUBE_API_KEY +
  "&q=";

export const comments = [
  {
    name: "saiganesh",
    comment: "nice video...",
    replies: [
      {
        name: "saiganesh",
        comment: "nice video...",
        replies: [],
      },
      {
        name: "saiganesh",
        comment: "nice video...",
        replies: [
          {
            name: "saiganesh",
            comment: "nice video...",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "saiganesh",
    comment: "nice video...",
    replies: [],
  },
  {
    name: "saiganesh",
    comment: "nice video...",
    replies: [
      {
        name: "saiganesh",
        comment: "nice video...",
        replies: [],
      },
    ],
  },
  {
    name: "saiganesh",
    comment: "nice video...",
    replies: [],
  },
  {
    name: "saiganesh",
    comment: "nice video...",
    replies: [],
  },
];
