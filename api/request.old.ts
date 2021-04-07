import got from 'got/dist/source'
import type { URLSearchParams } from 'url'

export class JsonRequest {
    private options : any = {
        responseType : "json"
    }

    url(url : string)
    {
        this.options.url = url
        return this
    }

    searchParams(params: URLSearchParams)
    {
        this.options.searchParams = params
        return this
    }

    async send()
    {
        return got<any>(this.options)
    }
}