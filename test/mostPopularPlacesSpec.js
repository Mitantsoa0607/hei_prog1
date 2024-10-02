import { expect } from "chai"
import { getMostPopularPlaces} from "../lib";
describe("Get the most popular place",function(){
    it("should give Itaosy Analamahitsy",function(){
        expect(getMostPopularPlaces.get(cities).to.equal("Itaosy Analamahitsy"));
    })
})