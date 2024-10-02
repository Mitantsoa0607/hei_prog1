import { expect } from "chai";
import {removeWords} from "../lib/"
describe("Remove some words",function(){
    it("should remove 'ceci' et 'un'",function(){
        expect(removeWords.remove("Hello, ceci est un test",["ceci","un"]).to.equal("Hello, est test"))
    })
})