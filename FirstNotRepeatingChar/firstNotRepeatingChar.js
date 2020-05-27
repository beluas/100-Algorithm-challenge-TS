function firstNotRepeatingCharacter(s) {
    const map ={}
    for(let i = 0; i<s.length; i++)
    {
        if(!map[s[i]])
        {
            map[s[i]] = 1;
        }
        else
        {
            map[s[i]]++
        }
    }
    let result =""

    for([key,value] of Object.entries(map))
    {
        
        if (value === 1) {
            result = key
            break;
        }
        
    }

    return result ? result:'_'
    
}

// abacabad
// abacabaabacaba