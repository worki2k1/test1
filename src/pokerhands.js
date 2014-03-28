function PokerHands() {}

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

PokerHands.prototype.sort = function(handArray) {
    return handArray.sort(function(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    });
};

PokerHands.prototype.hasSameColor = function(hand) {
    var handsArray = hand.split(' ');
    var tmp;
    for (var i = 0; i < handsArray.length; i++) {
        if (!tmp) {
            tmp = handsArray[i][1];
        } else {
            if (tmp != handsArray[i][1]) {
                return false;
            }
        }
    }
    return true;
};

PokerHands.prototype.checkHighCard = function(handArray) {
    return handArray[handArray.length - 1];
};

PokerHands.prototype.checkPair = function(handArray) {
    var prev;

    for (var i = 0; i < handArray.length; i++) {
        if (handArray[i] === prev) {
            return handArray[i];
        }
        prev = handArray[i];
    }
    return false;
};