import novelMusicService from './novel-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return novelMusicService.get('/search', { params: { q, type } }).then(res => res.data)
}

export default trackService
