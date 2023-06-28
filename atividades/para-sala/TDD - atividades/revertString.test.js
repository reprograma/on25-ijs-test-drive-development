<<<<<<< HEAD
const reverse = require('../revertString')

=======
const reverse = require('./revertString')
>>>>>>> 5ec9ea25a2f6f5fe77dc514204bad1638b9e572f
describe("RevertString function", () => {
    test("'casa' => 'asac'", () => {
        expect(reverse('casa')).toEqual('asac');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(reverse('javascript')).toEqual('tpircsavaj');
    });
});