
func("I Loved a girl")

function func(str) {
    let array = str.split(" ")
    let longestWord = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i]
        }
    }
console.log(longestWord)
}