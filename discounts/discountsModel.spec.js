const db = require('./dbConfig.js');
const codes = require('./discountsModel');


describe('discounts', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('discountCodes').truncate();
        })

        it('should add new codes provided into database', async () => {
            await codes.insert({ code: 'Memorial5', title: 'Memorial Day Campaign', amount: '-$5.00', description: 'Memorial Day wkend reg push Friday-Monday', appliesTo: 'registration fees only'});
            await codes.insert({ code: 'DadDay2019', title: "Father's Day BOGO", amount: '-$45.00', description: 'BOGO for survivor/thriver support person or network', appliesTo: 'registration fee only, no upgrades'});

            const codes = await db('discountCodes')
            expect(codes).toHaveLength(2);
        })
    })
})