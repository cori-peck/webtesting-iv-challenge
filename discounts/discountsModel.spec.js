const db = require('../data/dbConfig');
const Codes = require('./discountsModel');


describe('discounts', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('discountCodes').truncate();
        })

        it('should add new codes provided into database', async () => {
            await Codes.insert({ code: 'Memorial5', title: 'Memorial Day Campaign', amount: '-$5.00', description: 'Memorial Day wkend reg push Friday-Monday' });
            await Codes.insert({ code: 'DadDay2019', title: "Father's Day BOGO", amount: '-$45.00', description: 'BOGO for survivor/thriver support person or network' });

            const codes = await db('discountCodes')
            expect(codes).toHaveLength(2);
        })
    })
})