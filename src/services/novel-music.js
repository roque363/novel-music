import trae from 'trae'
import configService from './config'

const novelMusicService = trae.create({
  baseUrl: configService.apiUrl
})
export default novelMusicService
