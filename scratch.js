/**

    so the card once again stays pretty simple and free of logic
    at first i thought the card should hold the logic for what
    could be stacked on top of it but i think that would be better
    at a higher level, the Stack itself.


    card: name, suit, color, value, facedown (boolean with default true)

    deck: the cards that are not yet in play
            will potentially deal 1 or 3 cards at a time


    a Stack is 1 of 2 types:
         a suit stack that begins with an ace which then determines the suit
            of the whole stack. once the stack is topped with it's king, the
            stack is then 'complete'.
            can not have cards that are facedown

        a game stack? name still pending. when empty, this stack will start with any card, but can only
             contain cards lower than its first card.
             this stack can also hold up to 7 facedown cards which are only placed during setup
             this stack's basecard is the first one that is not facedown.



    Table

        CardInPlay

        FDStack
            //? do this on add?
            all cards are facedown
            deals top card to FUStack
            when empty, takes all the cards back from FUStack

        FUStack
            all cards are faceup //? on add?
            receives cards from the FDStack
            the top card is the current card in play
            can empty itself back into the FDStack when FDStack is empty


        SuitStack
        SuitStack
        SuitStack
        SuitStack

        add condition: nCard.name === A && stack.length === 0, 
                       nCard.suit === stack.suit && nCard.value === stack.top.value + 1

        
        PlayStack
        PlayStack
        PlayStack
        PlayStack
        PlayStack
        PlayStack
        PlayStack

        add condition: nCard.value === topCard.value - 1 && nCard.color === alternateColor(topCard.color)

 */

const stackType = {
    suit: 'SUIT',
    game: 'GAME',
}

const color = {
    RED: 'RED',
    BLACK: 'BLACK',
    alternate: function( c ) {
        return c === 'RED'
            ? 'BLACK'
            : 'RED' 
    }
}


const cardSuits = {
    SPADES: 'SPADES',
    CLUBS: 'CLUBS',
    HEARTS: 'HEARTS',
    DIAMONDS: 'DIAMONDS',
}

const cardValue = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
}

class Card {
    constructor( { name, suit, color, value } ) {
        this.name = name
        this.suit = suit
        this.color = color
        this.value = value
        this.facedown = true
    }


    get info() {
        const { name, suit, color, value } = this

        return {
            name,
            suit,
            color,
            value
        }
    }
}

/*
    Not sure if its better to split them like this, not a whole lot of shared logic.
    suit stacks take only a certain suit and only ones that are of higher value of
    its top most card while game stacks only take ones of lower value than the top most
    but also require the next card to be of different color.
*/

class Stack {
    constructor() {
        this.stack = []
    }

    add( card ) {
        // adds a card to top but needs rules
        this.stack.push( card )
    }

    remove() {
        // removes a card or cards off the top
        // for a gamestack it would need to know the target card
        // and return and array of the target plus all cards on top of it
        return this.stack.pop()

    }

    get top() {
        if (this.stack.length < 1) {
            return
        }

        return this.stack[ this.stack.length - 1]
    }


}

class SuitStack extends Stack {
    constructor() {
        super()
        this.suit = null
    }

    add( card ) {
        if ( this.suit === null && card.name === 'A' ) {
            this.suit = card.suit
            this.stack.push( card )
            return true
        }

        if ( this.suit != null && card.suit === this.suit ) {
            let topValue = this.stack[ this.stack.length - 1 ].value

            if ( value === topValue + 1 ) {
                this.stack.push( card )
                return true
            }
        }
        return false
    }

   
}



class GameStack extends Stack {
    constructor() {
        super()
    }

}

class Table {

}