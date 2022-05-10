const smash = (words) =>  {
    for (i = 0; i > words.length; i++) {
    words.splice(" ")}
    return words.join(" ")
}

smash(['I', 'eat', 'burger'])
