function PokerHands() {};

PokerHands.prototype.translate = function(hand) {

    var handsArray = hand.split(' ');
    for (var i = 0; i < handsArray.length; i++) {
        handsArray[i] = handsArray[i][0];
        switch (handsArray[i]) {
            case 'J':
                handsArray[i] = 10;
                break;

            case 'Q':
                handsArray[i] = 11;
                break;

            case 'K':
                handsArray[i] = 12;
                break;

            case 'A':
                handsArray[i] = 13;
                break;

            default:
                handsArray[i] = parseInt(handsArray[i]);
        }
    }
    return handsArray;

};