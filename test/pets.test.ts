import got from "got"
import {strict as assert} from 'assert'

describe('Pet', function()  
{
    it('cat be recived by id', async function()
    {
        const id = 3
        const response  = await got (`http://93.126.97.71:10080/api/pet/${id}`)
        const body = JSON.parse(response.body)
        
        assert(id == body.id, `Expected returned pet id to be ${id}`) 
    })
})