describe('Poker Hands', function() {

    it('should translate 2H 3D 5S 9C KD to an array with values', function() {
        var pokerHands = new PokerHands();

        var result = pokerHands.translate('2H 3D 5S 9C KD');
        var expected = [2, 3, 5, 9, 12];

        expect(result).toEqual(expected);
    });


});