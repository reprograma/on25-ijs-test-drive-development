<<<<<<< HEAD
const reverse = require('./revertString');

=======
const reverse = require('./revertString')
>>>>>>> 67e3fb4f323fefb153fdbb721c71526b4a58deb2
describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(reverse('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(reverse('javascript')).toEqual('tpircsavaj');
    });
});