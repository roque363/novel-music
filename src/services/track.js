import novelMusicService from './novel-music'

const trackService = {}

trackService.search = function (q, offset = 0) {
  const type = 'track'

  return novelMusicService.get('/search', {
    params: { q, type, offset }
  }).then(res => res.data)
}

trackService.getById = function (id) {
  return novelMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
