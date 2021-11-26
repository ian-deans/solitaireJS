/*
    Some of the logic would have to to the place where the cards a held. 
    this would allow us to determine what kind of stack the card is going onto
    the top spots only allow the same suits and from lowest (ace) to highest (king)
    while the spots below go from highest to lowest and must alternate colors




*/



class Card {
    suit: string
    color: string
    name: string
    value: number
    prev: Card | null
    next: Card | null





}


class CardStack {
    /**
     * these could potentially be simple arrays acting as stacks
     * the cards only come off the top, you can go lower but it takes
     * all card ontop with it.
     */

    
}