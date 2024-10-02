module.exports = {
    remove: function(original,removed){
        let original_split=original.split(" ")
        for (word in original_split){
            for (rem in removed){
                if (original_split[word] === removed[rem]){
                    original_split[word] = "";
                }
            }
        }
    }
}