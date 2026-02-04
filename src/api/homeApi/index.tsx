import service from '@/api/index' // 假设你的 axios 实例文件路径为 ../api
import { AxiosPromise } from 'axios';


export function getHomeList(data: any): AxiosPromise<any> {
  return service({
    url: 'api/mytable',
    method: 'get',
    data: {}
  })
}
