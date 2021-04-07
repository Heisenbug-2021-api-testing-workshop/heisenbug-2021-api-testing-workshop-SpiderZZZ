import { JsonRequest } from "http-req-builder"
import { definitions } from "../../.temp/types"
import { JsonRequestWithValidation } from "../request"
import { BaseController } from "./base.controller"

export class UserController extends BaseController {

    async login(credentials : {username : string, password : string}) : Promise<string>
    {
        return (
            await new JsonRequestWithValidation()
            .prefixUrl(this.params.prefixUrl)
            .url('user/login')
            .cookieJar(this.params.cookies)
            .searchParams(credentials)
            .send<definitions['AbstractApiResponse']>()
        ).headers['token'] as string
    }
}