describe('Poker Hands', function() {

    var pokerHands;

    beforeEach(function() {
        pokerHands = new PokerHands();
    });

    it('should translate 2H 3D 5S 9C KD to an array with values', function() {
        var result = pokerHands.translate('2H 3D 5S 9C KD');
        var expected = [2, 3, 5, 9, 12];

        expect(result).toEqual(expected);
    });


    it('should sort an array', function() {
        var input = [9, 5, 12, 2, 3];
        var result = pokerHands.sort(input);
        var expected = [2, 3, 5, 9, 12];

        expect(result).toEqual(expected);
    });

    describe('same color', function() {
        it('should return false if the cards have different colors', function() {
            var result = pokerHands.hasSameColor('2H 3D 5S 9C KD');

            expect(result).toEqual(false);
        });

        it('should return true if the cards have same colors', function() {
            var result = pokerHands.hasSameColor('2H 3H 5H 9H KH');

            expect(result).toEqual(true);
        });
    });

    describe('high card', function() {
        it('should return 12', function() {
            var input = [2, 3, 5, 9, 12];
            var result = pokerHands.checkHighCard(input);
            expect(result).toEqual(12);
        });
    });

    describe('pair', function() {
        it('should return true', function() {
            var input = [2, 3, 3, 9, 12];
            var result = pokerHands.checkPair(input);
            expect(result).toEqual(true);
        });
    });

});