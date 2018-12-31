import novelMusicService from './novel-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return novelMusicService.get('/search', { params: { q, type } }).then(res => res.data)
}

trackService.getById = function (id) {
  return novelMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
